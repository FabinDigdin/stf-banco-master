(function () {
  "use strict";

  /* ---------------- helpers ---------------- */
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach((k) => {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k.startsWith("on") && typeof attrs[k] === "function") node.addEventListener(k.slice(2), attrs[k]);
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach((c) => {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function initials(name) {
    return name.split(" ").filter(w => w.length > 2 || /^[A-ZÀ-Ý]/.test(w)).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  }

  function personColor(p) {
    if (p.group === "ministro" && p.indicadoPor && INDICACAO_META[p.indicadoPor]) {
      return INDICACAO_META[p.indicadoPor].color;
    }
    const fallback = { banqueiro: "#7a4a2f", intermediario: "#5c5a52", instituicao: "#3d6b5c", bolsonaro: "#a13d4c" };
    return fallback[p.group] || "#6b6b6b";
  }

  /* ---------------- theme toggle ---------------- */
  /* escuro é o padrão real do site (sem atributo = escuro), então o estado
     do toggle é controlado explicitamente em JS, não lido do atributo */
  const themeBtn = document.getElementById("themeToggle");
  let currentTheme = "dark";
  try { currentTheme = localStorage.getItem("stf-master-theme") || "dark"; } catch (e) {}

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", currentTheme);
    themeBtn.textContent = currentTheme === "dark" ? "☀ Claro" : "☾ Escuro";
  }
  themeBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    try { localStorage.setItem("stf-master-theme", currentTheme); } catch (e) {}
    applyTheme();
  });
  applyTheme();

  /* ---------------- tabs ---------------- */
  const tabButtons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".panel");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  /* ---------------- MODAL (perfis) ---------------- */
  const overlay = document.getElementById("modalOverlay");
  const modalCard = document.getElementById("modalCard");

  function openPersonModal(p) {
    const color = personColor(p);
    modalCard.innerHTML = "";
    modalCard.appendChild(el("button", { class: "modal-close", "aria-label": "Fechar", onclick: closeModal }, ["✕"]));

    const head = el("div", { class: "modal-head" }, [
      el("div", { class: "avatar", style: `background:${color}` }, [initials(p.name)]),
      el("div", {}, [
        el("h3", { class: "modal-name" }, [p.name]),
        el("div", { class: "modal-role" }, [p.role]),
      ]),
    ]);
    modalCard.appendChild(head);

    const tags = el("div", { class: "modal-tags" });
    if (p.tag) tags.appendChild(el("span", { class: "person-tag" }, [p.tag]));
    if (p.indicadoPor) tags.appendChild(el("span", { class: "person-tag", style: `border-color:${color};color:${color}` }, ["Indicado por " + p.indicadoPor]));
    if (p.vote && VOTE_META[p.vote]) {
      tags.appendChild(el("span", { class: "person-tag", style: `border-color:${VOTE_META[p.vote].color};color:${VOTE_META[p.vote].color}` }, [VOTE_META[p.vote].label]));
    }
    modalCard.appendChild(tags);

    if (p.stats && p.stats.length) {
      const statsWrap = el("div", { class: "modal-stats" });
      p.stats.forEach((s) => {
        statsWrap.appendChild(el("div", { class: "stat-cell" }, [
          el("b", {}, [s.value]),
          s.label,
        ]));
      });
      modalCard.appendChild(statsWrap);
    }

    const body = el("div", { class: "modal-body" });
    (p.details || []).forEach((paragraph) => body.appendChild(el("p", {}, [paragraph])));
    modalCard.appendChild(body);

    overlay.classList.add("open");
    overlay.scrollTop = 0;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  function findPerson(id) { return PEOPLE.find((p) => p.id === id); }
  window.__openPerson = (id) => openPersonModal(findPerson(id)); // used by scoreboard links

  /* ---------------- LINHA DO TEMPO ---------------- */
  const timelineEl = document.getElementById("timeline");
  const tlSearch = document.getElementById("tlSearch");
  const tlChips = document.getElementById("tlChips");
  let activeCats = new Set(); // empty = "todas"

  function eraLabel(sortDate) {
    const y = sortDate.slice(0, 4);
    if (y === "2023" || y === "2024") return { key: "2023-2024", title: "2023–2024", desc: "Os primeiros elos entre o banqueiro e o Supremo" };
    if (y === "2025") return { key: "2025", title: "2025", desc: "O Master quebra enquanto os laços com ministros se aprofundam" };
    return { key: "2026", title: "2026", desc: "A crise engole o próprio Supremo" };
  }

  function renderTimeline() {
    const q = (tlSearch.value || "").trim().toLowerCase();
    const sorted = [...TIMELINE].sort((a, b) => a.sort.localeCompare(b.sort));
    timelineEl.innerHTML = "";
    let lastEra = null;
    let shown = 0;

    sorted.forEach((item) => {
      const matchesCat = activeCats.size === 0 || item.cats.some((c) => activeCats.has(c));
      const haystack = (item.title + " " + item.desc + " " + item.date).toLowerCase();
      const matchesSearch = !q || haystack.includes(q);
      if (!matchesCat || !matchesSearch) return;

      const era = eraLabel(item.sort);
      if (era.key !== lastEra) {
        timelineEl.appendChild(el("div", { class: "year-sep" }, [
          era.title,
          el("span", { class: "era-desc" }, [era.desc]),
        ]));
        lastEra = era.key;
      }

      const catClass = "cat-" + item.cats[0];
      const badges = el("div", { class: "tl-badges" });
      item.cats.forEach((c) => {
        const meta = CATEGORY_META[c];
        badges.appendChild(el("span", { class: "tl-badge", style: `color:${meta.color};border-color:${meta.color}` }, [meta.label]));
      });

      const dateRow = el("div", { class: "tl-date" }, [item.date, item.isNew ? el("span", { class: "new-tag" }, ["NOVO"]) : null]);

      timelineEl.appendChild(el("div", { class: `tl-item ${catClass}` }, [
        dateRow,
        badges,
        el("h4", { class: "tl-title" }, [item.title]),
        el("p", { class: "tl-desc" }, [item.desc]),
      ]));
      shown++;
    });

    if (shown === 0) {
      timelineEl.appendChild(el("p", { style: "color:var(--ink-faint);padding:20px 0;" }, ["Nenhum evento encontrado com esses filtros."]));
    }
  }

  function buildTlChips() {
    const allChip = el("button", { class: "chip active", onclick: () => selectCat(null) }, [
      el("span", { class: "dot" }), "Tudo",
    ]);
    tlChips.appendChild(allChip);
    Object.keys(CATEGORY_META).forEach((catKey) => {
      const meta = CATEGORY_META[catKey];
      const chip = el("button", { class: "chip", onclick: () => selectCat(catKey) }, [
        el("span", { class: "dot", style: `background:${meta.color}` }), meta.label,
      ]);
      chip.dataset.cat = catKey;
      tlChips.appendChild(chip);
    });
  }

  function selectCat(catKey) {
    const chips = tlChips.querySelectorAll(".chip");
    if (catKey === null) {
      activeCats.clear();
      chips.forEach((c) => c.classList.toggle("active", !c.dataset.cat));
    } else {
      const chip = [...chips].find((c) => c.dataset.cat === catKey);
      if (activeCats.has(catKey)) activeCats.delete(catKey);
      else activeCats.add(catKey);
      chip.classList.toggle("active");
      const allChip = [...chips].find((c) => !c.dataset.cat);
      allChip.classList.toggle("active", activeCats.size === 0);
      chips.forEach((c) => { if (!c.dataset.cat) return; });
    }
    renderTimeline();
  }

  buildTlChips();
  tlSearch.addEventListener("input", renderTimeline);
  renderTimeline();

  /* ---------------- ENVOLVIDOS ---------------- */
  const peopleWrap = document.getElementById("peopleWrap");
  const GROUP_ORDER = [
    { key: "ministro", title: "Ministros do STF", desc: "Dez ministros com papel direto no julgamento ou nas apurações do caso Master." },
    { key: "banqueiro", title: "O banqueiro", desc: null },
    { key: "intermediario", title: "Intermediários", desc: "Nomes que fazem a ponte entre Vorcaro e os ministros." },
    { key: "instituicao", title: "Banco Central & PGR", desc: null },
    { key: "bolsonaro", title: "Família Bolsonaro", desc: "Entram apenas onde há implicação direta no caso Master." },
  ];

  function personCard(p) {
    const color = personColor(p);
    const card = el("button", { class: "person-card", onclick: () => openPersonModal(p) }, [
      el("div", { class: "person-top" }, [
        el("div", { class: "avatar", style: `background:${color}` }, [initials(p.name)]),
        el("div", {}, [
          el("div", { class: "person-name" }, [p.name]),
          el("div", { class: "person-role" }, [p.role]),
        ]),
      ]),
      p.tag ? el("span", { class: "person-tag" }, [p.tag]) : null,
      el("p", { class: "person-summary" }, [p.summary]),
    ]);
    if (p.indicadoPor && INDICACAO_META[p.indicadoPor]) {
      card.appendChild(el("div", { class: "indication-strip", style: `background:${INDICACAO_META[p.indicadoPor].color}` }));
    }
    return card;
  }

  GROUP_ORDER.forEach((g) => {
    const members = PEOPLE.filter((p) => p.group === g.key);
    if (!members.length) return;
    peopleWrap.appendChild(el("div", { class: "group-head" }, [g.title, el("span", { class: "count" }, [`(${members.length})`])]));
    if (g.desc) peopleWrap.appendChild(el("p", { style: "color:var(--ink-soft);font-size:13px;margin:-6px 0 12px;" }, [g.desc]));
    const grid = el("div", { class: "people-grid" });
    members.forEach((p) => grid.appendChild(personCard(p)));
    peopleWrap.appendChild(grid);
  });

  /* ---------------- PLACAR ---------------- */
  const separarCol = document.getElementById("colSeparar");
  const unificarCol = document.getElementById("colUnificar");
  const vistaBox = document.getElementById("vistaBox");
  const absentBox = document.getElementById("absentBox");
  const appointersLegend = document.getElementById("appointersLegend");

  function voteRow(p) {
    const color = personColor(p);
    return el("div", { class: "vote-person", onclick: () => openPersonModal(p) }, [
      el("div", { class: "avatar", style: `background:${color}` }, [initials(p.name)]),
      el("div", {}, [
        el("div", { class: "vote-person-name" }, [p.name]),
        el("div", { class: "vote-person-sub" }, [p.indicadoPor ? `Indicado por ${p.indicadoPor}` : p.role]),
      ]),
    ]);
  }

  const ministros = PEOPLE.filter((p) => p.group === "ministro");
  const separaramList = ministros.filter((p) => p.vote === "separar");
  const unificaramList = ministros.filter((p) => p.vote === "unificar");
  const vistaList = ministros.filter((p) => p.vote === "vista");
  const ausenteList = ministros.filter((p) => p.vote === "ausente");

  separarCol.querySelector(".score-num").textContent = separaramList.length;
  unificarCol.querySelector(".score-num").textContent = unificaramList.length;
  const separarList = document.getElementById("separarList");
  const unificarList = document.getElementById("unificarList");
  separaramList.forEach((p) => separarList.appendChild(voteRow(p)));
  unificaramList.forEach((p) => unificarList.appendChild(voteRow(p)));

  vistaList.forEach((p) => vistaBox.appendChild(voteRow(p)));
  ausenteList.forEach((p) => absentBox.appendChild(voteRow(p)));

  Object.keys(INDICACAO_META).forEach((name) => {
    if (name.includes("(")) return; // skip duplicate "Lula (1º mandato)"
    appointersLegend.appendChild(el("div", { class: "leg-item" }, [
      el("span", { class: "sw", style: `background:${INDICACAO_META[name].color}` }),
      "Indicado por " + name,
    ]));
  });

  /* ---------------- O DUELO: MORAES x MENDONÇA ---------------- */
  const duelPeopleEl = document.getElementById("duelPeople");
  const duelStepsEl = document.getElementById("duelSteps");

  function personChip(p) {
    const color = personColor(p);
    return el("div", { class: "branch-person-chip", onclick: () => openPersonModal(p) }, [
      el("div", { class: "avatar", style: `background:${color}` }, [initials(p.name)]),
      p.name,
    ]);
  }

  ["moraes", "mendonca"].forEach((id) => {
    const p = findPerson(id);
    if (p) duelPeopleEl.appendChild(personChip(p));
  });

  DUEL_STEPS.forEach((step, i) => {
    const isNow = i === DUEL_STEPS.length - 1;
    duelStepsEl.appendChild(el("div", { class: "duel-step" + (isNow ? " now" : "") }, [
      el("div", { class: "ds-date" }, [step.date]),
      el("div", { class: "ds-text" }, [step.text]),
    ]));
  });

  /* ---------------- CAUSA & EFEITO (ramificações) ---------------- */
  const branchListEl = document.getElementById("branchList");
  const branchFlowEl = document.getElementById("branchFlow");
  let currentEventId = KEY_EVENTS[0] ? KEY_EVENTS[0].id : null;

  function findEvent(id) { return KEY_EVENTS.find((e) => e.id === id); }

  function renderBranchList() {
    branchListEl.innerHTML = "";
    KEY_EVENTS.forEach((ev) => {
      const btn = el("button", {
        class: "branch-list-item" + (ev.id === currentEventId ? " active" : ""),
        onclick: () => selectEvent(ev.id),
      }, [
        el("span", { class: "bl-date" }, [ev.date]),
        el("span", { class: "bl-title" }, [ev.title]),
      ]);
      branchListEl.appendChild(btn);
    });
  }

  function branchNode(item, cameFromCause) {
    const wrap = el("div", { class: "branch-node" + (item.link ? " linkable" : "") });
    if (item.link) wrap.addEventListener("click", () => selectEvent(item.link));
    wrap.appendChild(el("p", { style: "margin:0;" }, [item.text]));
    if (item.link) {
      wrap.appendChild(el("span", { class: "bn-goto" }, [cameFromCause ? "› ver esse acontecimento" : "› ver desdobramento"]));
    }
    return wrap;
  }

  function renderBranchFlow() {
    const ev = findEvent(currentEventId);
    branchFlowEl.innerHTML = "";
    if (!ev) return;

    // coluna: antecedentes
    const causesCol = el("div", {}, [el("span", { class: "branch-col-label" }, ["Antecedentes"])]);
    if (ev.causes && ev.causes.length) {
      ev.causes.forEach((c) => causesCol.appendChild(branchNode(c, true)));
    } else {
      causesCol.appendChild(el("div", { class: "branch-empty-note" }, ["// ponto de partida: sem antecedente registrado"]));
    }

    // coluna central: o evento
    const meta = CATEGORY_META[ev.cat];
    const eventCol = el("div", {}, [
      el("span", { class: "branch-col-label event" }, ["O acontecimento"]),
      el("div", { class: "branch-event-card" }, [
        el("div", { class: "branch-event-date" }, [ev.date]),
        el("span", { class: "tl-badge", style: `color:${meta.color};border-color:${meta.color};margin-bottom:8px;display:inline-block;` }, [meta.label]),
        el("h4", { class: "branch-event-title" }, [ev.title]),
        el("p", { class: "branch-event-summary" }, [ev.summary]),
        el("div", { class: "branch-people" }, (ev.people || []).map((pid) => {
          const p = findPerson(pid);
          return p ? personChip(p) : null;
        })),
      ]),
    ]);

    // coluna: consequências
    const effectsCol = el("div", {}, [el("span", { class: "branch-col-label" }, ["Consequências"])]);
    if (ev.effects && ev.effects.length) {
      ev.effects.forEach((eff) => effectsCol.appendChild(branchNode(eff, false)));
    } else {
      effectsCol.appendChild(el("div", { class: "branch-empty-note" }, ["// situação em aberto, sem desdobramento registrado ainda"]));
    }

    branchFlowEl.appendChild(causesCol);
    branchFlowEl.appendChild(eventCol);
    branchFlowEl.appendChild(effectsCol);
  }

  function selectEvent(id) {
    if (!findEvent(id)) return;
    currentEventId = id;
    renderBranchList();
    renderBranchFlow();
    const flowSection = document.querySelector("#tab-branches .branch-layout");
    if (flowSection) flowSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  renderBranchList();
  renderBranchFlow();

})();
