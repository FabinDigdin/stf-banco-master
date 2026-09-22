/* ===================== DADOS: LINHA DO TEMPO ===================== */
/* categorias: master (Caso Master), stf (Ministros/STF), pf (Polícia Federal), bozo (Família Bolsonaro) */

const TIMELINE = [
  {
    date: "dez 2023", sort: "2023-12-01", cats: ["master"],
    title: "Vorcaro salva o contato de Moraes",
    desc: "Segundo a PF, o banqueiro Daniel Vorcaro passa a manter contato direto com o ministro Alexandre de Moraes, salvo na agenda como “Alexandre de Moraes Brasília”."
  },
  {
    date: "jan 2024", sort: "2024-01-01", cats: ["master", "stf"],
    title: "Contrato de R$ 131 mi com a mulher de Moraes",
    desc: "O escritório de Viviane Barci de Moraes, esposa do ministro, fecha contrato com o Master (36 parcelas, R$ 108 mi líquidos) prevendo, entre outros serviços, atuação em inquéritos da PF e Polícia Civil e procedimentos no Banco Central, Receita e Cade. 22 parcelas (R$ 80,2 milhões) são pagas até novembro de 2024, quando os pagamentos param, coincidindo com o início da liquidação extrajudicial do banco."
  },
  {
    date: "abr 2024", sort: "2024-04-01", cats: ["master"],
    title: "Mensagens citam a PGR",
    desc: "Mensagens no celular de Vorcaro mostram contatos com o procurador-geral Paulo Gonet, classificados por ele como assuntos profissionais."
  },
  {
    date: "mai 2024", sort: "2024-05-01", cats: ["master", "stf"], isNew: true,
    title: "Vorcaro banca homenagem a Fux em Nova York",
    desc: "Fux discursa num evento da Forbes em Nova York sobre segurança jurídica e risco-Brasil; mensagens indicam que Vorcaro usou duas empresas (a Forbes Brasil, de Antonio Camarotti, e a BeFly, agência de turismo parceira do Master) para bancar o almoço de homenagem (cerca de 30 a 40 convidados, com naming rights do evento cotados em US$ 200 mil), pedindo que passagem e hotel fossem processados “via Camarotti” em vez de diretamente. Fux nega contato direto com Vorcaro e diz ter sido convidado pela própria Forbes, tendo ido só ao almoço do dia 14."
  },
  {
    date: "6 nov 2024", sort: "2024-11-06", cats: ["master", "stf"],
    title: "Vorcaro procura o filho de Fux sobre o precatório",
    desc: "Vorcaro manda a Rodrigo Fux, advogado e filho do ministro, um documento sobre um recurso bilionário; dois dias depois o caso começa a ser julgado no plenário virtual. Estava em jogo um precatório de R$ 5 bilhões (caso Agroindustrial Tabu, suspenso por Rosa Weber em 2023), cuja liberação poderia abrir precedente para até R$ 80 bilhões em casos semelhantes do setor sucroalcooleiro. Rodrigo nega ter atuado no caso, assinado contrato ou recebido pagamento; Fux mantém o voto contrário a Vorcaro em todas as fases."
  },
  {
    date: "dez 2024", sort: "2024-12-01", cats: ["master", "stf"], isNew: true,
    title: "“Tapete vermelho, irmão”",
    desc: "Mensagens mostram Rodrigo Fux tratando Vorcaro como “irmão” e oferecendo um café “com tapete vermelho” no escritório dele; os dois combinam ainda um encontro do próprio ministro Fux com Vorcaro num evento em Londres, com Rodrigo chegando a passar o e-mail da secretária do pai ao banqueiro. O escritório Fux Advogados diz que foi só “uma tentativa de aproximação comercial” que nunca se concretizou, um ano antes de Vorcaro ter qualquer problema criminal."
  },
  {
    date: "mar 2025", sort: "2025-03-01", cats: ["master", "stf"], isNew: true,
    title: "Mendonça recebe Vorcaro no Instituto Iter",
    desc: "O encontro não é no STF, mas no Instituto Iter, fundado pelo próprio Mendonça, para tratar de precatórios; ele diz depois que apenas o ouviu. No dia seguinte, Mendonça pede acesso a um processo envolvendo uma empresa de serviços funerários ligada a Vorcaro, o cunhado do banqueiro era assessor da empresa, e um irmão de Mendonça trabalhava em órgão regulador do setor. Mendonça deixaria a sociedade do Instituto Iter mais tarde."
  },
  {
    date: "28 mar 2025", sort: "2025-03-28", cats: ["master"],
    title: "BRB anuncia compra do Master",
    desc: "O banco estatal do Distrito Federal (BRB) anuncia intenção de assumir participação majoritária no Banco Master."
  },
  {
    date: "mai 2025", sort: "2025-05-02", cats: ["master", "stf"],
    title: "Segundo contrato da mulher de Moraes",
    desc: "Surge um novo contrato do escritório de Viviane Barci, agora com a Viking Participações, no valor de R$ 50 milhões: suplementar ao de R$ 131 mi. Parte dos honorários seria paga em cotas de uso de jato e helicóptero."
  },
  {
    date: "22 ago 2025", sort: "2025-08-22", cats: ["master", "stf"], isNew: true,
    title: "Moraes e a esposa voam no jato de Vorcaro",
    desc: "O casal desembarca no aeroporto Santos Dumont, no Rio, após viajar em um Legacy 650 ligado a Vorcaro: episódio que só viria a público mais de um ano depois."
  },
  {
    date: "3 set 2025", sort: "2025-09-03", cats: ["master"],
    title: "Banco Central barra o negócio",
    desc: "O BC rejeita a operação de compra do Master pelo BRB."
  },
  {
    date: "17 nov 2025", sort: "2025-11-17", cats: ["master", "pf"],
    title: "Vorcaro é preso tentando deixar o país",
    desc: "No mesmo dia em que o grupo Fictor anuncia proposta de R$ 3 bilhões pelo Master, a PF prende Vorcaro quando ele se preparava para embarcar rumo a Malta."
  },
  {
    date: "18 nov 2025", sort: "2025-11-18", cats: ["master", "pf"],
    title: "Liquidação e Operação Compliance Zero",
    desc: "A PF deflagra a Operação Compliance Zero; o BC decreta a liquidação extrajudicial do Master, banco apontado como responsável por um rombo estimado em R$ 12 bilhões, afetando ao menos 1,6 milhão de correntistas."
  },
  {
    date: "28–29 nov 2025", sort: "2025-11-28", cats: ["master", "stf"],
    title: "Caso vai para o Supremo",
    desc: "A defesa de Vorcaro aciona prerrogativa de foro; Dias Toffoli é sorteado relator no STF."
  },
  {
    date: "2–3 dez 2025", sort: "2025-12-02", cats: ["stf"],
    title: "Toffoli sigila o processo",
    desc: "O ministro decreta sigilo e centraliza no STF as investigações sobre o Master."
  },
  {
    date: "22–24 dez 2025", sort: "2025-12-22", cats: ["master", "stf"],
    title: "Moraes e o presidente do Banco Central",
    desc: "Vem à tona que Moraes telefonou para o presidente do BC, Gabriel Galípolo, sobre o caso; os dois negam ter discutido o mérito."
  },
  {
    date: "fev 2026", sort: "2026-02-02", cats: ["master", "pf"],
    title: "STF amplia os poderes da PF",
    desc: "O plenário do Supremo autoriza a Polícia Federal a aprofundar a investigação sobre o Master."
  },
  {
    date: "11–12 fev 2026", sort: "2026-02-11", cats: ["stf"],
    title: "Toffoli se declara suspeito",
    desc: "Perícia da PF associa Toffoli a um número de celular citado por Vorcaro. O plenário apoia Toffoli por unanimidade, mas ele opta por se declarar suspeito; André Mendonça é sorteado o novo relator do caso."
  },
  {
    date: "fev 2026", sort: "2026-02-14", cats: ["stf", "master"], isNew: true,
    title: "O resort da família de Toffoli",
    desc: "Vem à tona a ligação entre parentes de Toffoli e o Tayayá Resort, no Paraná: os irmãos do ministro, Igor Luiz Pires Toffoli e José Eugênio Dias Toffoli, e um primo, Mario Umberto Degani, tinham participações no empreendimento via a Maridt Participações. Fabiano Zettel, cunhado de Vorcaro, aparece em operações ligadas ao resort, comprado em abril de 2025 por um advogado da JBS através de um fundo administrado pela Reag: instituição citada em suspeitas de lavagem de dinheiro ligada ao PCC. O resort tem cassino com máquinas de aposta e blackjack. A PGR apura eventual participação econômica de Toffoli; ele nega irregularidades e não se pronuncia publicamente. Fachin sai em defesa dele. Foi esse achado que levou Toffoli a se declarar suspeito."
  },
  {
    date: "25 fev 2026", sort: "2026-02-25", cats: ["pf"],
    title: "CPI avança no Senado",
    desc: "A CPI do Crime Organizado aprova a convocação dos irmãos de Toffoli, do ex-presidente do BC Roberto Campos Neto, do ex-ministro Paulo Guedes e de outros nomes."
  },
  {
    date: "4 mar 2026", sort: "2026-03-04", cats: ["pf"],
    title: "Vorcaro é preso outra vez",
    desc: "Também são presos seu cunhado, Fabiano Zettel, e um segurança, Luiz Phillipi Mourão, que morre por suicídio pouco depois."
  },
  {
    date: "11 mar 2026", sort: "2026-03-11", cats: ["stf"],
    title: "Toffoli se afasta de vez",
    desc: "O ministro se declara suspeito também na CPI e na análise da prisão de Vorcaro na Segunda Turma."
  },
  {
    date: "abr 2026", sort: "2026-04-01", cats: ["stf"], isNew: true,
    title: "Moraes nega qualquer voo ou contrato",
    desc: "Moraes declara oficialmente que “jamais viajou em nenhum avião de Daniel Vorcaro ou em sua companhia” e que não conhece Fabiano Zettel; ele e o escritório da mulher também negam a existência do contrato de R$ 50 milhões com a Viking. Cinco meses depois, ambas as negativas seriam contestadas por novas provas."
  },
  {
    date: "14 abr 2026", sort: "2026-04-14", cats: ["pf", "stf"],
    title: "Relatório pede indiciamento de ministros",
    desc: "Relatório do senador Alessandro Vieira pede o indiciamento de Moraes, Toffoli, Gilmar Mendes e do procurador-geral Gonet; a CPI rejeita o relatório por 6 votos a 4."
  },
  {
    date: "16 abr 2026", sort: "2026-04-16", cats: ["pf"],
    title: "Ex-presidente do BRB é preso",
    desc: "Paulo Henrique Costa é preso, suspeito de ter recebido cerca de R$ 146 milhões em imóveis ligados ao esquema."
  },
  {
    date: "14 mai 2026", sort: "2026-05-14", cats: ["pf"],
    title: "Pai de Vorcaro é preso",
    desc: "Em meio a negociações de delação premiada, depois rejeitadas, Henrique Vorcaro, pai do banqueiro, é preso."
  },
  {
    date: "mai 2026", sort: "2026-05-20", cats: ["bozo", "master"],
    title: "Áudios revelam pedido de Flávio Bolsonaro",
    desc: "Vazam áudios em que Flávio Bolsonaro pede R$ 61 milhões a Vorcaro para financiar o filme biográfico sobre o pai, Jair Bolsonaro, depois identificado como o projeto “Dark Horse”."
  },
  {
    date: "15 jun 2026", sort: "2026-06-15", cats: ["pf"],
    title: "Gonet rejeita a delação de Vorcaro",
    desc: "O procurador-geral da República nega a proposta de colaboração premiada do banqueiro."
  },
  {
    date: "jun 2026", sort: "2026-06-20", cats: ["stf"],
    title: "STF rejeita por unanimidade o precatório de Vorcaro",
    desc: "O plenário nega, de forma unânime, o pedido relacionado ao precatório de R$ 5 bilhões do caso Tabu: Fux vota contra Vorcaro como já vinha fazendo desde o início. É o desfecho que mais tarde o ministro usaria para se defender de qualquer suspeita."
  },
  {
    date: "jul 2026", sort: "2026-07-01", cats: ["pf", "bozo"],
    title: "PF abre inquérito sobre o filme",
    desc: "Autorizado por Mendonça, um inquérito sigiloso passa a apurar se Flávio Bolsonaro cometeu lavagem de dinheiro e evasão de divisas no financiamento da produção."
  },
  {
    date: "jul–ago 2026", sort: "2026-07-20", cats: ["stf", "master"],
    title: "O filho de Nunes Marques na mira",
    desc: "Mensagens no celular de Vorcaro mostram o diretor jurídico do Master perguntando se deveriam “manter” um pagamento de R$ 500 mil por mês a “Kevin Marques”, filho do ministro Kassio Nunes Marques, e depois confirmando que “foi pago”. O Coaf aponta que uma consultoria ligada a Kevin recebeu R$ 6,6 milhões do Master entre out/2024 e jul/2025, dos quais R$ 281,6 mil repassados a ele: valores incompatíveis com o faturamento declarado da empresa."
  },
  {
    date: "27 ago 2026", sort: "2026-08-27", cats: ["master"],
    title: "Novo depoimento de Vorcaro",
    desc: "O banqueiro presta depoimento desta vez sem a presença da PF, a explicação oficial da equipe de Mendonça foi uma diretriz do CNJ que permite excluir investigadores quando a testemunha alega intimidação grave. O episódio depois vira ponto de atrito entre os ministros."
  },
  {
    date: "set 2026", sort: "2026-09-05", cats: ["stf"], isNew: true,
    title: "A lista de regalias de “KN”",
    desc: "Além do dinheiro, reportagens detalham uma lista de favores negociados por Vorcaro para Nunes Marques através do escritório de Newton e Camilla Ramos: diária com tarifa promocional no hotel Fasano Itaim (“Ministro Kassio me pediu para ver se vocês conseguem para ele”); uma mansão de ator no Joá, avaliada em R$ 250 milhões, alugada por R$ 1,45 milhão para a semana de Carnaval de 2025; um jato particular para o aniversário da mulher do ministro, em Maceió; seis nomes numa lista de camarote; e a organização de uma viagem de dez dias para cinco pessoas. Nas mensagens, o grupo chega a comemorar um voto de Nunes Marques favorável ao reconhecimento da dívida de precatórios que interessava a Vorcaro."
  },
  {
    date: "1 set 2026", sort: "2026-09-01", cats: ["pf", "stf"],
    title: "Relatório da PF vaza; Mendonça manda ao plenário",
    desc: "Torna-se público um relatório da PF sobre o caso, incluindo a troca de mensagens entre Vorcaro e Moraes, nela, em 15 de novembro de 2025, dois dias antes de ser preso, Vorcaro perguntou a Moraes “Acha que segunda já tenho que estar fora?”. Vorcaro escrevia num app de notas e enviava print; Moraes usava mensagens que se autodestroem, por isso só o lado de Vorcaro pôde ser recuperado. A PGR questiona a regularidade do vazamento. Mendonça decide que só o plenário pode definir se Moraes deve ser formalmente investigado."
  },
  {
    date: "2–5 set 2026", sort: "2026-09-02", cats: ["stf"],
    title: "Moraes contra-ataca Mendonça",
    desc: "Um relatório paralelo da PF sobre a conduta do próprio Mendonça como relator (apontando prazos e rigor de prova desiguais conforme o investigado) chega às mãos de Moraes, que passa a pedir que Mendonça seja investigado por improbidade e abuso de autoridade."
  },
  {
    date: "9 set 2026", sort: "2026-09-09", cats: ["stf"],
    title: "Fachin tira Moraes do inquérito das fake news",
    desc: "Depois de Moraes tentar incluir as acusações contra Mendonça dentro do inquérito das fake news, o presidente do STF, Edson Fachin, retira Moraes da relatoria desse inquérito."
  },
  {
    date: "10 set 2026", sort: "2026-09-10", cats: ["pf", "bozo"],
    title: "Operação Make Up",
    desc: "Mendonça torna pública a investigação sobre o filme de Flávio Bolsonaro; a PF faz a Operação Make Up contra a produtora Karina da Gama e o deputado Mario Frias, suspeitos de desviar R$ 2 milhões em emendas parlamentares destinadas ao filme."
  },
  {
    date: "10–11 set 2026", sort: "2026-09-10", cats: ["bozo"],
    title: "Reação de Flávio e Eduardo Bolsonaro",
    desc: "Flávio nega irregularidades e chama a operação de “interferência política”; Eduardo Bolsonaro confirma viagem a Washington para insistir junto ao governo americano na retomada de sanções contra Moraes."
  },
  {
    date: "12 set 2026", sort: "2026-09-12", cats: ["stf"],
    title: "Fachin também tira a relatoria de Mendonça",
    desc: "Citando o regimento interno, Fachin assume pessoalmente a relatoria do processo que apura se Moraes deve ser investigado, tirando-a de Mendonça, como fizera com Moraes três dias antes."
  },
  {
    date: "15 set 2026", sort: "2026-09-15", cats: ["stf"],
    title: "Defesa de Moraes: 44 páginas",
    desc: "Moraes entrega defesa chamando o relatório da PF de “farsa”, negando qualquer favorecimento ou diálogo relevante com Vorcaro e acusando Mendonça de agir por “vingança”. Pede a nulidade da investigação por falta de autorização para abri-la."
  },
  {
    date: "15 set 2026", sort: "2026-09-15", cats: ["stf"],
    title: "Dino acusa Fachin de “avocação”",
    desc: "Na sessão, Dino afirma que Fachin já havia “avocado” cinco processos de outros ministros (um dele, três de Mendonça, um de Moraes) e alerta que isso abre uma “avenida de autoritarismo”, ferindo o princípio do juiz natural. Pede que Gilmar Mendes se manifeste; Fachin nega ter avocado qualquer coisa."
  },
  {
    date: "15 set 2026", sort: "2026-09-15", cats: ["stf"],
    title: "Toffoli e Nunes Marques ficam de fora",
    desc: "Toffoli se declara suspeito por “consciência íntima”; Nunes Marques se declara impedido, nega que o filho tenha recebido do Master e afirma nunca ter julgado processo ligado ao banco."
  },
  {
    date: "15 set 2026", sort: "2026-09-15", cats: ["stf"],
    title: "Placar: 4 a 3 pela separação: julgamento suspenso",
    desc: "Votam por manter separados os processos de Mendonça e Moraes: Fachin, Mendonça, Fux e Cármen Lúcia. Votam pela união: Gilmar Mendes, Zanin e o próprio Moraes. Dino também vota pela união, mas pede vista antes da proclamação, seu voto fica fora do placar oficial, que é suspenso. Dino tem até 90 dias corridos para devolver o processo; se não se manifestar no prazo, o julgamento volta automaticamente à pauta."
  },
  {
    date: "20 set 2026", sort: "2026-09-20", cats: ["master", "stf"], isNew: true,
    title: "Imagens contradizem a negativa de Moraes",
    desc: "Vêm a público fotos e vídeo do voo de 22 de agosto de 2025: Moraes e a esposa no jato de Vorcaro. As imagens contradizem diretamente a negativa oficial dada em abril, tanto sobre o voo quanto sobre o contrato de R$ 50 milhões, que mensagens de Vorcaro tratam como já em vigor."
  },
  {
    date: "20–21 set 2026", sort: "2026-09-20", cats: ["master", "stf"], isNew: true,
    title: "O contrato de R$ 427 milhões da “Turma do KN”",
    desc: "Revela-se um contrato de honorário de êxito (5% sobre o valor recebido em 12 processos) entre o Master e o escritório de Camilla Ramos, mulher do desembargador Newton Ramos (TRF-1): nas mensagens de Vorcaro, o casal é tratado pelo codinome “Turma do KN”, referência a Kassio Nunes Marques. Newton repassava a Vorcaro pedidos do próprio ministro, incluindo hospedagem no Fasano; Vorcaro também bancou a mansão de Carnaval, o jato particular e os camarotes. A mulher do desembargador chegou a comemorar um voto dele favorável aos precatórios do Master. No fundo: Vorcaro havia comprado precatórios de usinas de açúcar (do extinto Instituto do Açúcar e do Álcool) na expectativa de receber R$ 8,5 bilhões, e precisava agilizar o julgamento na 2ª Turma do STF: turma da qual Nunes Marques faz parte. A PF já alertava sobre esses R$ 8,5 bi, mas, ao tornar o caso público, Mendonça concentrou as revelações nas mensagens envolvendo Moraes."
  },
  {
    date: "19 set 2026", sort: "2026-09-19", cats: ["stf"], isNew: true,
    title: "A “sócia” de Gilmar Mendes",
    desc: "Um sexto ministro entra na lista: mensagens do diretor jurídico do Master, Luiz Rennó, tratam a advogada Dalide Corrêa (ex-diretora-geral do IDP por quase uma década) como “sócia do GM stf” e “canal direto com o Supremo”. O escritório dela recebeu cerca de R$ 33 milhões do Master em 2024, ligados a disputas de precatórios do setor sucroalcooleiro; num dos pedidos, Rennó pede autorização urgente de R$ 15 milhões citando a vitória num desses processos. Um ex-cunhado de Gilmar, o empresário Chiquinho Feitosa, também é citado recebendo pagamentos mensais de Vorcaro. Gilmar nega qualquer sociedade com Dalide, diz não ter conhecimento do trabalho dela e afirma ter votado contra os interesses do Master em todos os processos relacionados."
  },
  {
    date: "22 set 2026 (hoje)", sort: "2026-09-22", cats: ["stf"],
    title: "Situação em aberto",
    desc: "O julgamento sobre unir ou separar os processos de Moraes e Mendonça segue suspenso pela vista do Dino, sem data para retomada, mas a crise não parou: nos últimos dias vieram à tona o voo de Moraes no jato de Vorcaro e o contrato bilionário de precatórios ligado a Nunes Marques, mostrando que o caso Master segue se alargando mesmo com o julgamento parado."
  },
];

/* ===================== DADOS: ENVOLVIDOS ===================== */
/* group: "ministro" | "banqueiro" | "intermediario" | "instituicao" | "bolsonaro" */
/* vote: "separar" | "unificar" | "vista" | "ausente" | null */
/* indicadoPor: nome do presidente que indicou (só ministros do STF) */

const PEOPLE = [
  // ---------------- MINISTROS ----------------
  {
    id: "moraes",
    name: "Alexandre de Moraes",
    role: "Ministro do STF",
    group: "ministro",
    indicadoPor: "Temer",
    vote: "unificar",
    tag: "Investigado",
    summary: "O ministro cujo eventual investigação motivou o julgamento. Contrato de R$ 131 mi da esposa com o Master, voo no jato de Vorcaro e mensagens diretas com o banqueiro.",
    stats: [
      { label: "Contrato esposa (jan 2024)", value: "R$ 131 mi" },
      { label: "2º contrato (mai 2025)", value: "R$ 50 mi" },
      { label: "Contato salvo desde", value: "dez 2023" },
    ],
    details: [
      "Confirmado o contrato de R$ 131 milhões do escritório da esposa, Viviane Barci de Moraes, com o Master: pago em parcelas que pararam com o início da liquidação extrajudicial, em novembro de 2025. Depois veio à tona um segundo contrato, de R$ 50 milhões, com a Viking Participações.",
      "O contato de Vorcaro com Moraes existe no celular do banqueiro desde dezembro de 2023, salvo como “Alexandre de Moraes Brasília”. Houve troca de mensagens: em 15 de novembro de 2025, dois dias antes de ser preso, Vorcaro perguntou a Moraes “Acha que segunda já tenho que estar fora?”. Vorcaro escrevia num app de notas e enviava print; Moraes usava mensagens que se autodestroem, por isso só o lado de Vorcaro pôde ser recuperado. Essas conversas só vieram a público em 1º de setembro de 2026, via reportagem do Estadão.",
      "Em abril de 2026, Moraes negou oficialmente qualquer voo ou contato com o avião de Vorcaro e a existência do contrato da Viking. Cinco meses depois, em setembro, fotos e vídeo do voo de 22 de agosto de 2025 (Moraes e a esposa desembarcando no Santos Dumont, vindos de um jato ligado a Vorcaro) contradisseram diretamente essas duas negativas.",
      "Depois do relatório da PF vazar e do plenário ser convocado, Moraes reagiu recuperando um relatório paralelo da PF sobre a conduta do próprio Mendonça como relator (apontando prazos e rigor de prova desiguais conforme o investigado) e pedindo que Mendonça também fosse investigado, por improbidade administrativa e abuso de autoridade. Moraes chama o processo de “vingança” e pede nulidade por falta de autorização para abri-lo.",
      "Votou pela unificação dos processos, o que na prática o manteria sob a mesma relatoria (Mendonça) que já apura sua conduta.",
    ],
  },
  {
    id: "mendonca",
    name: "André Mendonça",
    role: "Ministro do STF · Relator do caso",
    group: "ministro",
    indicadoPor: "Bolsonaro",
    vote: "separar",
    tag: "Relator",
    summary: "Indicado por Bolsonaro em 2021. Herdou a relatoria do Master depois da suspeição de Toffoli; recebeu Vorcaro no Instituto Iter e foi quem levou ao plenário a decisão de investigar ou não Moraes.",
    stats: [
      { label: "Relatórios de inteligência da PF sobre ele", value: "6" },
      { label: "Encontro com Vorcaro", value: "mar 2025, Instituto Iter" },
    ],
    details: [
      "Recebeu Vorcaro em 2025 no Instituto Iter (instituto fundado por ele próprio, fora do STF) para tratar de precatórios; diz que apenas o ouviu. No dia seguinte, pediu acesso a um processo envolvendo uma empresa funerária ligada a Vorcaro (o cunhado do banqueiro era assessor da empresa, e um irmão de Mendonça trabalhava no órgão regulador do setor). Nega ter feito qualquer favor.",
      "Descobriu que a própria PF havia produzido ao menos 6 relatórios de inteligência sobre ele, o que chamou de “monitoramento ilícito de Ministro da Suprema Corte”. Depois disso passou a exigir que visitantes deixassem celulares em caixas de bloqueio de sinal (Faraday) e a tocar música clássica de fundo em conversas sensíveis, além de mandar apurar quem autorizou os relatórios.",
      "O depoimento de Vorcaro em 27 de agosto de 2026 ocorreu sem a presença da PF, a explicação oficial da equipe de Mendonça foi uma diretriz do CNJ que permite excluir investigadores quando a testemunha alega intimidação grave. Isso depois virou ponto de atrito entre os ministros.",
      "Mendonça manteve sob sigilo por mais tempo o financiamento do filme “Dark Horse” (sobre Jair Bolsonaro) enquanto liberava informações que prejudicavam Moraes, o que reforça, para seus críticos, a acusação de “atuação seletiva”.",
      "Foi depois do relatório vazar e das mensagens Vorcaro–Moraes virem à tona que Mendonça mandou ao plenário a decisão sobre investigar ou não Moraes, decisão que Moraes chamou de vingança. Votou para manter os processos separados, o que preserva sua própria relatoria sobre a apuração de Moraes.",
    ],
  },
  {
    id: "toffoli",
    name: "Dias Toffoli",
    role: "Ministro do STF",
    group: "ministro",
    indicadoPor: "Lula (1º mandato)",
    vote: "ausente",
    tag: "Suspeito, não votou",
    summary: "Relator original do caso; sigilou o processo em dezembro de 2025 e se declarou suspeito em fevereiro de 2026, depois que a PF associou seu número a um celular citado por Vorcaro. O resort da família selou o afastamento.",
    stats: [
      { label: "Familiares no resort", value: "2 irmãos + 1 primo" },
      { label: "Resort comprado em", value: "abr 2025" },
    ],
    details: [
      "Foi sorteado relator original do caso no STF quando a defesa de Vorcaro acionou a prerrogativa de foro (nov 2025); decretou sigilo e centralizou as investigações no Supremo em dezembro de 2025.",
      "Em fevereiro de 2026, perícia da PF associou Toffoli a um número de celular citado por Vorcaro. O plenário apoiou Toffoli por unanimidade, mas ele optou por se declarar suspeito; André Mendonça foi sorteado o novo relator.",
      "Descobriu-se que os irmãos dele, Igor Luiz Pires Toffoli e José Eugênio Dias Toffoli, e um primo, Mario Umberto Degani, tinham participação (via a Maridt Participações) no Tayayá Resort, no Paraná, comprado em abril de 2025 por um advogado da JBS através de um fundo administrado pela Reag (a mesma gestora citada em suspeitas de lavagem de dinheiro para o PCC). Fabiano Zettel, cunhado de Vorcaro, aparece em operações ligadas ao resort, que tem cassino com máquinas de aposta e blackjack. Foi esse achado que levou Toffoli a se declarar suspeito também na CPI e na análise da prisão de Vorcaro na Segunda Turma, em março de 2026.",
      "A PGR apura eventual participação econômica de Toffoli no resort; ele nega irregularidades e não se pronuncia publicamente. Fachin saiu em defesa dele.",
      "Não votou na sessão de 15 de setembro por suspeição declarada “por consciência íntima”.",
    ],
  },
  {
    id: "nunesmarques",
    name: "Kassio Nunes Marques",
    role: "Ministro do STF",
    group: "ministro",
    indicadoPor: "Bolsonaro",
    vote: "ausente",
    tag: "Impedido, não votou",
    summary: "Mensagens do celular de Vorcaro mostram pagamento mensal ao filho do ministro e uma lista de regalias pessoais tratada com o codinome “Turma do KN”, além de um contrato paralelo de R$ 427 milhões.",
    stats: [
      { label: "Pagamento mensal ao filho", value: "R$ 500 mil" },
      { label: "Contrato “Turma do KN”", value: "R$ 427 mi" },
      { label: "Mansão de Carnaval", value: "R$ 1,45 mi" },
    ],
    details: [
      "Mensagens no celular de Vorcaro mostram o diretor jurídico do Master perguntando se deveriam “manter” um pagamento de R$ 500 mil por mês para “Kevin Marques”, filho do ministro, e depois confirmando que “foi pago”. O Coaf aponta que uma consultoria ligada a Kevin recebeu R$ 6,6 milhões do Master entre out/2024 e jul/2025, dos quais R$ 281,6 mil repassados a ele: valores incompatíveis com o faturamento declarado da empresa.",
      "Apareceu ainda um contrato paralelo de R$ 427 milhões (honorário de êxito de 5% sobre o valor recebido em 12 processos) entre o Master e o escritório de Camilla Ramos, mulher do desembargador Newton Ramos (TRF-1), o casal é tratado nas mensagens como “Turma do KN”, referência direta a Kassio Nunes Marques.",
      "O escritório negociava com Vorcaro uma lista de regalias pessoais para o ministro: uma diária com tarifa promocional no hotel Fasano Itaim (“Ministro Kassio me pediu para ver se vocês conseguem para ele”); uma mansão de ator no Joá, avaliada em R$ 250 milhões, alugada por R$ 1,45 milhão só para a semana de Carnaval de 2025; um jato particular para o aniversário da mulher dele, em Maceió; seis nomes numa lista de camarote; e a organização de uma viagem de dez dias para cinco pessoas.",
      "Nas mensagens, o grupo chega a comemorar um voto do próprio Nunes Marques favorável ao reconhecimento da dívida de precatórios que interessava a Vorcaro, o pano de fundo é que o banqueiro havia comprado precatórios de usinas de açúcar na expectativa de receber R$ 8,5 bilhões, e precisava agilizar o julgamento do tema na 2ª Turma do STF, da qual Nunes Marques faz parte.",
      "Na sessão de 15 de setembro, se declarou impedido, negou que o filho tenha recebido do Master e afirmou nunca ter julgado processo ligado ao banco, por isso não votou.",
    ],
  },
  {
    id: "gilmar",
    name: "Gilmar Mendes",
    role: "Ministro do STF",
    group: "ministro",
    indicadoPor: "FHC",
    vote: "unificar",
    tag: "Ligação apurada",
    summary: "Mensagens do diretor jurídico do Master tratam a advogada Dalide Corrêa como “sócia do GM stf” e “canal direto com o Supremo”. Gilmar nega qualquer sociedade e diz ter votado contra os interesses do Master.",
    stats: [
      { label: "Recebido pelo escritório de Dalide (2024)", value: "R$ 33 mi" },
    ],
    details: [
      "Um sexto ministro entrou na lista em 19 de setembro de 2026: mensagens do diretor jurídico do Master, Luiz Rennó, tratam a advogada Dalide Corrêa (ex-diretora-geral do IDP por quase uma década) como “sócia do GM stf” e “canal direto com o Supremo”.",
      "O escritório de Dalide recebeu cerca de R$ 33 milhões do Master em 2024, ligados a disputas de precatórios do setor sucroalcooleiro; num dos pedidos, Rennó pede autorização urgente de R$ 15 milhões citando a vitória num desses processos.",
      "Um ex-cunhado de Gilmar Mendes, o empresário Chiquinho Feitosa, também é citado recebendo pagamentos mensais de Vorcaro.",
      "Gilmar nega qualquer sociedade com Dalide, diz não ter conhecimento do trabalho dela e afirma ter votado contra os interesses do Master em todos os processos relacionados.",
      "Em abril de 2026, um relatório do senador Alessandro Vieira já pedia o indiciamento de Gilmar (além de Moraes, Toffoli e Gonet); a CPI rejeitou o relatório por 6 votos a 4.",
      "Votou pela unificação dos processos de Mendonça e Moraes.",
    ],
  },
  {
    id: "fux",
    name: "Luiz Fux",
    role: "Ministro do STF",
    group: "ministro",
    indicadoPor: "Dilma",
    vote: "separar",
    tag: "Proximidade sem voto favorável",
    summary: "Vorcaro bancou uma homenagem a Fux em Nova York; o filho, Rodrigo Fux, tratava o banqueiro como “irmão”. Mas nas decisões concretas, Fux sempre votou contra Vorcaro.",
    stats: [
      { label: "Evento Forbes NY (naming rights)", value: "US$ 200 mil" },
      { label: "Precatório negado (jun 2026)", value: "unânime" },
    ],
    details: [
      "Em maio de 2024, Fux discursou num evento da Forbes em Nova York sobre segurança jurídica e risco-Brasil. Mensagens mostram que Vorcaro usou duas empresas (a Forbes Brasil, do CEO Antonio Camarotti, e a BeFly, agência de turismo parceira do Master) para bancar o almoço de homenagem a ele, com cerca de 30 a 40 convidados e naming rights do evento cotados em US$ 200 mil. Vorcaro instruiu a equipe a processar passagem e hotel “via Camarotti”, não diretamente. Fux nega qualquer contato direto com Vorcaro e diz que foi convidado pela própria Forbes, tendo ido só ao almoço do dia 14.",
      "O que mais chama atenção é a informalidade do filho: em dezembro de 2024, Rodrigo Fux (advogado) tratava Vorcaro como “irmão” e oferecia um café “com tapete vermelho” no escritório dele, e ainda articulou um encontro do próprio ministro Fux com Vorcaro num evento em Londres, chegando a passar o e-mail da secretária do pai para o banqueiro. O escritório Fux Advogados minimiza isso como “uma tentativa de aproximação comercial” que nunca virou nada, ocorrida um ano antes de Vorcaro ter qualquer problema criminal.",
      "Tudo isso é cronologicamente anterior ao episódio do precatório de R$ 5 bilhões: em novembro de 2024, Vorcaro mandou documentação sobre o caso a Rodrigo, dois dias antes do julgamento no plenário virtual, e mesmo assim Fux votou contra Vorcaro, com o STF rejeitando o pedido por unanimidade em junho de 2026.",
      "Ou seja: proximidade social real e sustentada por mais de um ano (evento em NY bancado por empresas ligadas ao Master, tentativa de encontro em Londres, tom de “irmão” nas mensagens), mas, até onde as investigações mostram, sem nenhuma decisão favorável a Vorcaro.",
      "Votou para manter os processos de Mendonça e Moraes separados.",
    ],
  },
  {
    id: "fachin",
    name: "Edson Fachin",
    role: "Presidente do STF",
    group: "ministro",
    indicadoPor: "Dilma",
    vote: "separar",
    tag: "Sem ligação apurada",
    summary: "Como presidente do STF, tirou a relatoria de Moraes no inquérito das fake news e depois a de Mendonça no processo sobre investigar Moraes, assumindo-a pessoalmente. Acusado por Dino de “avocação”.",
    details: [
      "Em 9 de setembro de 2026, depois de Moraes tentar incluir as acusações contra Mendonça dentro do inquérito das fake news, Fachin retirou Moraes da relatoria desse inquérito.",
      "Em 12 de setembro, citando o regimento interno, Fachin assumiu pessoalmente a relatoria do processo que apura se Moraes deve ser investigado, tirando-a de Mendonça.",
      "Na sessão de 15 de setembro, Dino acusou Fachin de ter “avocado” cinco processos de outros ministros (um dele próprio, três de Mendonça, um de Moraes), alertando que isso abre uma “avenida de autoritarismo” e fere o princípio do juiz natural. Fachin nega ter avocado qualquer coisa.",
      "Saiu em defesa de Toffoli no episódio do resort da família.",
      "Votou para manter os processos de Mendonça e Moraes separados.",
    ],
  },
  {
    id: "dino",
    name: "Flávio Dino",
    role: "Ministro do STF",
    group: "ministro",
    indicadoPor: "Lula",
    vote: "vista",
    tag: "Pediu vista",
    summary: "Votou pela unificação dos processos, mas pediu vista antes da proclamação, por isso seu voto não entrou no placar oficial (4 a 3) e o julgamento ficou suspenso. Tem até 90 dias corridos para devolver o processo.",
    details: [
      "Na sessão de 15 de setembro de 2026, Dino votou pela unificação dos processos de Mendonça e Moraes, mas pediu vista antes da proclamação do resultado. Como consequência, seu voto não entra no placar oficial (4 a 3 pela separação) e o julgamento fica suspenso.",
      "Na mesma sessão, foi Dino quem acusou Fachin de “avocação” de processos, chamando a prática de uma “avenida de autoritarismo” que fere o princípio do juiz natural, e pediu que Gilmar Mendes se manifestasse sobre o tema.",
      "Pelo regimento, Dino tem até 90 dias corridos para devolver o processo com seu voto fundamentado. Se não se manifestar dentro do prazo, o julgamento volta automaticamente à pauta.",
    ],
  },
  {
    id: "carmen",
    name: "Cármen Lúcia",
    role: "Ministra do STF",
    group: "ministro",
    indicadoPor: "Lula",
    vote: "separar",
    tag: "Sem ligação apurada",
    summary: "Uma das quatro votos que prevaleceram no placar (ainda que suspenso) pela manutenção dos processos separados.",
    details: [
      "Votou, na sessão de 15 de setembro de 2026, para manter separados os processos que investigam Moraes e o que está sob relatoria de Mendonça (caso Master/Vorcaro), integrando a maioria de 4 a 3 pela separação, hoje suspensa pela vista de Dino.",
    ],
  },
  {
    id: "zanin",
    name: "Cristiano Zanin",
    role: "Ministro do STF",
    group: "ministro",
    indicadoPor: "Lula",
    vote: "unificar",
    tag: "Sem ligação apurada",
    summary: "Votou pela unificação dos processos de Mendonça e Moraes.",
    details: [
      "Votou, na sessão de 15 de setembro de 2026, pela unificação do processo que investiga Moraes ao processo já sob relatoria de Mendonça, ficando ao lado de Gilmar Mendes e do próprio Moraes na minoria (3 votos, mais o de Dino fora do placar por conta da vista).",
    ],
  },

  // ---------------- BANQUEIRO ----------------
  {
    id: "vorcaro",
    name: "Daniel Vorcaro",
    role: "Dono do Banco Master",
    group: "banqueiro",
    tag: "Preso",
    summary: "O banqueiro no centro de tudo. Preso em novembro de 2025 tentando deixar o país; o Master foi liquidado pelo BC com rombo estimado em R$ 12 bilhões. Suas mensagens (recuperadas em prints) são a fonte da maior parte das revelações.",
    stats: [
      { label: "Rombo estimado do Master", value: "R$ 12 bi" },
      { label: "Correntistas afetados", value: "1,6 milhão" },
      { label: "1ª prisão", value: "17 nov 2025" },
      { label: "2ª prisão", value: "4 mar 2026" },
    ],
    details: [
      "Mantinha contato direto com Alexandre de Moraes desde dezembro de 2023, salvo na agenda como “Alexandre de Moraes Brasília”. Diferente de Moraes (que usava mensagens autodestrutivas), Vorcaro escrevia num aplicativo de notas e tirava print para enviar, por isso só o lado dele das conversas pôde ser recuperado pela investigação.",
      "Preso em 17 de novembro de 2025 quando se preparava para embarcar rumo a Malta, no mesmo dia em que o grupo Fictor anunciou proposta de R$ 3 bilhões pelo Master. No dia seguinte, a PF deflagrou a Operação Compliance Zero e o Banco Central decretou a liquidação extrajudicial do banco.",
      "Preso pela segunda vez em 4 de março de 2026, junto com o cunhado Fabiano Zettel e um segurança, Luiz Phillipi Mourão, que morreu por suicídio pouco depois.",
      "Negociou delação premiada com o pai, Henrique Vorcaro (preso em maio de 2026), mas a proposta de colaboração foi rejeitada pelo procurador-geral Paulo Gonet em 15 de junho de 2026.",
      "No fundo de boa parte do esquema com Kassio Nunes Marques: Vorcaro havia comprado precatórios de usinas de açúcar do extinto Instituto do Açúcar e do Álcool na expectativa de receber R$ 8,5 bilhões, e precisava agilizar o julgamento do tema na 2ª Turma do STF.",
    ],
  },

  // ---------------- INTERMEDIÁRIOS ----------------
  {
    id: "turmakn",
    name: "Newton e Camilla Ramos",
    role: "Desembargador (TRF-1) e advogada: “Turma do KN”",
    group: "intermediario",
    tag: "Codinome nas mensagens",
    summary: "O casal repassava a Vorcaro pedidos pessoais atribuídos a Kassio Nunes Marques e detinha um contrato de honorário de êxito de R$ 427 milhões com o Master.",
    details: [
      "Newton Ramos é desembargador do TRF-1; sua mulher, Camilla Ramos, é advogada. Nas mensagens de Vorcaro, o casal é tratado pelo codinome “Turma do KN”, referência direta a Kassio Nunes Marques.",
      "O escritório de Camilla tinha um contrato de honorário de êxito com o Master: 5% sobre o valor recebido em 12 processos, num total avaliado em R$ 427 milhões.",
      "Newton repassava a Vorcaro pedidos atribuídos ao próprio ministro Nunes Marques, incluindo hospedagem no hotel Fasano Itaim. Vorcaro também bancou, via esse canal, uma mansão de Carnaval de R$ 1,45 milhão, um jato particular e camarotes. A mulher do desembargador chegou a comemorar um voto de Nunes Marques favorável aos precatórios do Master.",
    ],
  },
  {
    id: "dalide",
    name: "Dalide Corrêa",
    role: "Advogada: ex-diretora-geral do IDP",
    group: "intermediario",
    tag: "“Sócia do GM stf”",
    summary: "Tratada em mensagens internas do Master como “sócia” de Gilmar Mendes e “canal direto com o Supremo”. Seu escritório recebeu cerca de R$ 33 milhões do banco em 2024.",
    details: [
      "Ex-diretora-geral do IDP (Instituto Brasiliense de Direito Público) por quase uma década, Dalide Corrêa é tratada por mensagens do diretor jurídico do Master, Luiz Rennó, como “sócia do GM stf” e “canal direto com o Supremo”, referência a Gilmar Mendes.",
      "O escritório dela recebeu cerca de R$ 33 milhões do Master em 2024, ligados a disputas de precatórios do setor sucroalcooleiro. Num dos pedidos internos, Rennó solicita autorização urgente de R$ 15 milhões citando a vitória num desses processos.",
      "Gilmar Mendes nega qualquer sociedade com Dalide e diz não ter conhecimento do trabalho dela.",
    ],
  },

  // ---------------- INSTITUIÇÕES ----------------
  {
    id: "galipolo",
    name: "Gabriel Galípolo",
    role: "Presidente do Banco Central",
    group: "instituicao",
    tag: "Adicionado a pedido",
    summary: "Recebeu telefonema de Moraes sobre o caso Master em dezembro de 2025; os dois negam ter discutido o mérito. Foi o BC, sob sua gestão, que barrou a compra do Master pelo BRB e depois decretou a liquidação extrajudicial do banco.",
    details: [
      "Em 3 de setembro de 2025, o Banco Central rejeitou a operação de compra do Master pelo banco estatal BRB, decisão tomada sob a presidência de Galípolo.",
      "Entre 22 e 24 de dezembro de 2025, veio à tona que Alexandre de Moraes havia telefonado para Galípolo sobre o caso Master; ambos negam ter discutido o mérito das investigações.",
      "Foi o Banco Central, sob Galípolo, que decretou a liquidação extrajudicial do Master em 18 de novembro de 2025, apontando um rombo estimado em R$ 12 bilhões e afetando ao menos 1,6 milhão de correntistas, no mesmo dia em que a PF deflagrou a Operação Compliance Zero.",
    ],
  },
  {
    id: "gonet",
    name: "Paulo Gonet",
    role: "Procurador-Geral da República",
    group: "instituicao",
    tag: "Adicionado a pedido",
    summary: "Nome citado em mensagens de Vorcaro desde 2024; rejeitou a proposta de delação premiada do banqueiro em 2026 e questionou a regularidade do vazamento do relatório da PF que reacendeu a crise.",
    stats: [
      { label: "Delação de Vorcaro rejeitada em", value: "15 jun 2026" },
    ],
    details: [
      "Já em abril de 2024, mensagens no celular de Vorcaro mostravam contatos com Gonet, classificados por ele próprio como assuntos profissionais.",
      "Em abril de 2026, o relatório do senador Alessandro Vieira pediu o indiciamento de Gonet, além de Moraes, Toffoli e Gilmar Mendes; a CPI rejeitou o relatório por 6 votos a 4.",
      "Em 15 de junho de 2026, como procurador-geral da República, Gonet rejeitou formalmente a proposta de colaboração premiada de Daniel Vorcaro.",
      "Quando o relatório da PF sobre o caso vazou, em 1º de setembro de 2026, trazendo à tona as mensagens entre Vorcaro e Moraes, a PGR sob Gonet questionou publicamente a regularidade desse vazamento.",
    ],
  },

  // ---------------- FAMÍLIA BOLSONARO ----------------
  {
    id: "flavio",
    name: "Flávio Bolsonaro",
    role: "Senador",
    group: "bolsonaro",
    tag: "Financiamento do filme",
    summary: "Pediu R$ 61 milhões a Vorcaro para financiar o filme biográfico “Dark Horse” sobre o pai, Jair Bolsonaro. Alvo de inquérito da PF por possível lavagem de dinheiro e evasão de divisas.",
    details: [
      "Em maio de 2026, vazaram áudios em que Flávio Bolsonaro pede R$ 61 milhões a Vorcaro para financiar o filme biográfico sobre Jair Bolsonaro, o projeto “Dark Horse”.",
      "Em julho de 2026, autorizado por Mendonça, um inquérito sigiloso da PF passou a apurar se Flávio cometeu lavagem de dinheiro e evasão de divisas no financiamento da produção.",
      "Em 10 de setembro de 2026, Mendonça tornou pública a investigação; a PF deflagrou a Operação Make Up contra a produtora Karina da Gama e o deputado Mario Frias, suspeitos de desviar R$ 2 milhões em emendas parlamentares destinadas ao filme. Flávio nega irregularidades e chama a operação de “interferência política”.",
    ],
  },
  {
    id: "eduardo",
    name: "Eduardo Bolsonaro",
    role: "Deputado federal licenciado",
    group: "bolsonaro",
    tag: "Pressão política",
    summary: "Reagiu à Operação Make Up confirmando viagem a Washington para insistir na retomada de sanções internacionais contra Alexandre de Moraes.",
    details: [
      "Em 10–11 de setembro de 2026, na esteira da Operação Make Up contra o esquema do filme sobre o pai, Eduardo Bolsonaro confirmou viagem a Washington para insistir junto ao governo americano na retomada de sanções contra Moraes.",
      "Sua participação no caso Master é política, não financeira: ele não aparece nas mensagens de Vorcaro, diferentemente do irmão Flávio.",
    ],
  },
];

/* Legenda de categorias da linha do tempo */
const CATEGORY_META = {
  master:  { label: "Caso Master",      color: "#ff9d3d" },
  stf:     { label: "Ministros / STF",  color: "#3d9dff" },
  pf:      { label: "Polícia Federal",  color: "#35d68f" },
  bozo:    { label: "Família Bolsonaro",color: "#ff5c7a" },
};

/* Legenda de quem indicou cada ministro */
const INDICACAO_META = {
  "Bolsonaro":        { color: "#4ade80" },
  "Temer":            { color: "#eab308" },
  "Lula":              { color: "#fb7185" },
  "Lula (1º mandato)": { color: "#fb7185" },
  "Dilma":            { color: "#a78bfa" },
  "FHC":              { color: "#22d3ee" },
};

const VOTE_META = {
  separar:   { label: "Manter separados", color: "#3d9dff" },
  unificar:  { label: "Unificar",         color: "#ff9d3d" },
  vista:     { label: "Pediu vista",      color: "#9a9aa0" },
  ausente:   { label: "Não votou",        color: "#67686d" },
};

/* ===================== DADOS: O DUELO MORAES x MENDONÇA ===================== */
/* mini cronologia focada só no embate entre os dois, do início da relatoria de
   Mendonça sobre o caso Master até a última atualização (22/09/2026) */

const DUEL_STEPS = [
  {
    date: "mar 2025",
    text: "Antes de qualquer coisa: Mendonça recebe Vorcaro no Instituto Iter, fundado por ele próprio, para tratar de precatórios. Diz depois que apenas o ouviu, mas é esse encontro prévio que Moraes usaria mais tarde contra ele.",
  },
  {
    date: "fev 2026",
    text: "Com a suspeição de Toffoli, Mendonça é sorteado o novo relator do caso Master, colocando nas mãos dele o processo que, meses depois, chegaria a Moraes.",
  },
  {
    date: "27 ago 2026",
    text: "Vorcaro presta um novo depoimento, desta vez sem a PF presente, por decisão da equipe de Mendonça amparada em diretriz do CNJ. O episódio vira o primeiro ponto de atrito público entre os dois.",
  },
  {
    date: "1 set 2026",
    text: "O relatório da PF vaza, trazendo à tona as mensagens entre Vorcaro e Moraes. Mendonça decide que só o plenário pode definir se Moraes deve ser formalmente investigado, e manda a decisão para lá.",
  },
  {
    date: "2 a 5 set 2026",
    text: "Moraes contra-ataca: recupera um relatório paralelo da PF sobre a própria conduta de Mendonça como relator, apontando prazos e rigor de prova desiguais conforme o investigado, e pede que ele também seja investigado, por improbidade administrativa e abuso de autoridade.",
  },
  {
    date: "9 set 2026",
    text: "Depois de Moraes tentar incluir as acusações contra Mendonça dentro do inquérito das fake news, o presidente do STF, Edson Fachin, retira Moraes da relatoria desse inquérito.",
  },
  {
    date: "12 set 2026",
    text: "Fachin vai além: assume pessoalmente a relatoria do processo que apura se Moraes deve ser investigado, tirando-a de Mendonça, como fizera com Moraes três dias antes.",
  },
  {
    date: "15 set 2026",
    text: "Moraes entrega defesa de 44 páginas chamando o relatório da PF de farsa, negando qualquer favorecimento e acusando Mendonça de agir por vingança. Pede a nulidade da investigação por falta de autorização para abri-la.",
  },
  {
    date: "15 set 2026",
    text: "O plenário vota 4 a 3 por manter separados os processos de Mendonça e Moraes (o que preserva a relatoria de Mendonça sobre a apuração de Moraes), mas Dino pede vista antes da proclamação, e o julgamento fica suspenso.",
  },
  {
    date: "20 set 2026",
    text: "Vêm a público fotos e vídeo do voo de Moraes no jato de Vorcaro, de agosto de 2025, contradizendo a negativa oficial dada por ele em abril, justamente no momento em que Moraes acusa Mendonça de perseguição.",
  },
  {
    date: "20 a 21 set 2026",
    text: "Revela-se o contrato de R$ 427 milhões ligado a Kassio Nunes Marques. A PF já sabia desse esquema havia mais tempo, mas ao tornar o caso público, Mendonça concentrou as revelações nas mensagens envolvendo Moraes, reforçando a acusação de atuação seletiva contra ele.",
  },
  {
    date: "22 set 2026 (hoje)",
    text: "Situação em aberto: o julgamento sobre unir ou separar os processos segue suspenso pela vista de Dino, sem data marcada. Nenhuma decisão final sobre investigar Moraes foi tomada, mas o duelo público entre os dois ministros continua se alimentando de revelações quase diárias.",
  },
];

/* ===================== DADOS: RAMIFICAÇÕES (causa e efeito) ===================== */
/* acontecimentos-chave do caso, com o que levou a cada um e o que veio depois.
   items em causes/effects podem linkar a outro nó pelo campo "link" */

const KEY_EVENTS = [
  {
    id: "vorcaro-rede",
    date: "2023 a 2025",
    cat: "master",
    title: "Vorcaro cultiva uma rede dentro do Supremo",
    people: ["vorcaro", "moraes", "mendonca", "fux", "turmakn", "dalide"],
    summary: "Ao longo de dois anos, Vorcaro constrói contratos, presentes e proximidade pessoal com ministros e seus círculos. É o alicerce de tudo que viria à tona depois.",
    causes: [
      { text: "O Master precisa de trânsito institucional para viabilizar negócios sensíveis: aquisição de precatórios bilionários, disputas regulatórias no Banco Central e uma imagem de solidez para atrair depositantes com CDBs de alto rendimento." },
    ],
    effects: [
      { text: "O banco cresce de forma agressiva e arriscada até que a bolha estoura, com o Master sendo liquidado pelo BC.", link: "master-quebra" },
    ],
  },
  {
    id: "master-quebra",
    date: "set a nov 2025",
    cat: "master",
    title: "O Banco Central barra a venda e o Master quebra",
    people: ["galipolo", "vorcaro"],
    summary: "O BC rejeita a compra do Master pelo BRB; semanas depois, Vorcaro é preso tentando embarcar rumo a Malta e o banco é liquidado com um rombo estimado em R$ 12 bilhões.",
    causes: [
      { text: "Dois anos de proximidade com ministros não impedem o desfecho financeiro: o BC rejeita a operação de venda ao BRB em 3 de setembro de 2025.", link: "vorcaro-rede" },
    ],
    effects: [
      { text: "17 nov 2025: Vorcaro é preso tentando deixar o país. No dia seguinte, a PF deflagra a Operação Compliance Zero e o BC decreta a liquidação extrajudicial do banco." },
      { text: "A defesa de Vorcaro aciona a prerrogativa de foro, e o caso vai parar no STF.", link: "caso-vai-stf" },
    ],
  },
  {
    id: "caso-vai-stf",
    date: "28 a 29 nov 2025",
    cat: "stf",
    title: "O caso vai para o Supremo: Toffoli é sorteado relator",
    people: ["toffoli", "vorcaro"],
    summary: "Com a prerrogativa de foro acionada, Dias Toffoli assume a relatoria do caso Master e, dias depois, sigila todo o processo.",
    causes: [
      { text: "A prisão de Vorcaro e a liquidação do banco levam o caso ao STF por prerrogativa de foro.", link: "master-quebra" },
    ],
    effects: [
      { text: "Perícia da PF associa Toffoli a um número de celular citado por Vorcaro, e ele acaba se declarando suspeito.", link: "toffoli-suspeito" },
    ],
  },
  {
    id: "toffoli-suspeito",
    date: "11 a 12 fev 2026",
    cat: "stf",
    title: "Toffoli se declara suspeito",
    people: ["toffoli", "mendonca"],
    summary: "Depois da perícia associar seu número a um celular citado por Vorcaro, e com a descoberta paralela do resort da família no Paraná, Toffoli se afasta e André Mendonça é sorteado o novo relator.",
    causes: [
      { text: "O plenário chega a apoiar Toffoli por unanimidade, mas ele opta por se declarar suspeito mesmo assim.", link: "caso-vai-stf" },
      { text: "Vem à tona a ligação entre parentes de Toffoli e o Tayayá Resort, comprado por um advogado da JBS via um fundo administrado pela Reag, a mesma gestora citada em suspeitas de lavagem para o PCC." },
    ],
    effects: [
      { text: "André Mendonça é sorteado o novo relator do caso Master, herdando também a futura decisão sobre Moraes.", link: "mendonca-relator" },
      { text: "Em março, Toffoli se afasta de vez também na CPI e na análise da prisão de Vorcaro." },
    ],
  },
  {
    id: "mendonca-relator",
    date: "fev 2026 em diante",
    cat: "stf",
    title: "Mendonça assume a relatoria do caso Master",
    people: ["mendonca", "vorcaro"],
    summary: "Mendonça herda um processo que, meses depois, vai colocá-lo em rota de colisão direta com Moraes, ministro que ele próprio já havia recebido informalmente antes de virar relator.",
    causes: [
      { text: "A suspeição de Toffoli abre o sorteio que recai sobre Mendonça.", link: "toffoli-suspeito" },
      { text: "Antes disso, em março de 2025, Mendonça já havia recebido Vorcaro no Instituto Iter, que ele próprio fundou, para tratar de precatórios. Diz depois que apenas o ouviu." },
    ],
    effects: [
      { text: "Em agosto, o depoimento de Vorcaro ocorre sem a PF presente, por decisão da equipe de Mendonça.", link: "depoimento-sem-pf" },
    ],
  },
  {
    id: "depoimento-sem-pf",
    date: "27 ago 2026",
    cat: "master",
    title: "Vorcaro depõe sem a presença da PF",
    people: ["mendonca", "vorcaro"],
    summary: "Amparada numa diretriz do CNJ, a equipe de Mendonça exclui a PF de um novo depoimento de Vorcaro. O episódio vira o primeiro ponto de atrito público na relação entre Mendonça e os demais ministros.",
    causes: [
      { text: "Como relator, Mendonça controla as condições dos atos de instrução do processo.", link: "mendonca-relator" },
    ],
    effects: [
      { text: "Poucos dias depois, o relatório da PF sobre o caso vaza, trazendo à tona as mensagens entre Vorcaro e Moraes.", link: "relatorio-vaza" },
    ],
  },
  {
    id: "relatorio-vaza",
    date: "1 set 2026",
    cat: "pf",
    title: "O relatório da PF vaza e Mendonça manda a decisão ao plenário",
    people: ["mendonca", "moraes", "gonet"],
    summary: "Torna-se público um relatório da PF que inclui as mensagens entre Vorcaro e Moraes, incluindo a pergunta do banqueiro dois dias antes de ser preso. Mendonça decide que só o plenário pode dizer se Moraes deve ser formalmente investigado.",
    causes: [
      { text: "O acúmulo de provas (contratos da esposa, o voo no jato, as mensagens) mais o clima de desconfiança após o depoimento sem PF.", link: "depoimento-sem-pf" },
    ],
    effects: [
      { text: "Moraes reage recuperando um relatório paralelo sobre a própria conduta de Mendonça como relator.", link: "moraes-contra-ataca" },
    ],
  },
  {
    id: "moraes-contra-ataca",
    date: "2 a 5 set 2026",
    cat: "stf",
    title: "Moraes contra-ataca Mendonça",
    people: ["moraes", "mendonca"],
    summary: "Moraes passa a pedir que Mendonça também seja investigado, por improbidade administrativa e abuso de autoridade, citando prazos e rigor de prova desiguais conforme o investigado.",
    causes: [
      { text: "A decisão de Mendonça de levar o caso de Moraes ao plenário.", link: "relatorio-vaza" },
    ],
    effects: [
      { text: "Fachin intervém, tirando primeiro a relatoria do inquérito das fake news de Moraes, depois a própria relatoria do processo de Mendonça.", link: "fachin-avoca" },
    ],
  },
  {
    id: "fachin-avoca",
    date: "9 e 12 set 2026",
    cat: "stf",
    title: "Fachin toma as relatorias dos dois",
    people: ["fachin", "moraes", "mendonca", "dino"],
    summary: "Em uma semana, o presidente do STF tira a relatoria do inquérito das fake news de Moraes e depois assume pessoalmente o processo que apura se Moraes deve ser investigado, tirando-a de Mendonça.",
    causes: [
      { text: "O contra-ataque de Moraes contra Mendonça escala o conflito a ponto de exigir uma intervenção institucional.", link: "moraes-contra-ataca" },
    ],
    effects: [
      { text: "Na sessão de votação, Dino acusa Fachin de avocação de processos, alertando para uma avenida de autoritarismo.", link: "votacao-15set" },
    ],
  },
  {
    id: "votacao-15set",
    date: "15 set 2026",
    cat: "stf",
    title: "Placar 4 a 3: julgamento suspenso pela vista de Dino",
    people: ["fachin", "mendonca", "fux", "carmen", "gilmar", "zanin", "moraes", "dino", "toffoli", "nunesmarques"],
    summary: "Moraes entrega defesa de 44 páginas chamando o relatório de farsa. O plenário vota manter os processos separados por 4 a 3, mas Dino pede vista antes da proclamação, e o julgamento fica suspenso.",
    causes: [
      { text: "A escalada entre Moraes e Mendonça chega ao plenário para ser decidida.", link: "fachin-avoca" },
      { text: "Toffoli e Nunes Marques ficam de fora por suspeição e impedimento, ambos ligados às próprias apurações do caso Master." },
    ],
    effects: [
      { text: "Dino tem até 90 dias corridos para devolver o processo; se não se manifestar, o julgamento volta automaticamente à pauta." },
      { text: "Mesmo suspenso, o caso continua se alargando: dias depois vêm à público o voo de Moraes e o contrato ligado a Nunes Marques.", link: "voo-moraes-revelado" },
    ],
  },
  {
    id: "voo-moraes-revelado",
    date: "20 set 2026",
    cat: "master",
    title: "Imagens contradizem a negativa de Moraes sobre o voo",
    people: ["moraes", "vorcaro"],
    summary: "Vêm a público fotos e vídeo do voo de agosto de 2025 no jato de Vorcaro, contradizendo diretamente a negativa oficial dada por Moraes em abril, tanto sobre o voo quanto sobre o contrato de R$ 50 milhões.",
    causes: [
      { text: "Apuração jornalística contínua, independente do andamento do julgamento suspenso.", link: "votacao-15set" },
    ],
    effects: [
      { text: "Reforça a fragilidade da defesa de Moraes bem no momento em que ele acusa Mendonça de perseguição, alimentando a pressão para quando Dino devolver o voto." },
    ],
  },
  {
    id: "turma-kn-revelado",
    date: "19 a 21 set 2026",
    cat: "stf",
    title: "Sócia de Gilmar e contrato da Turma do KN vêm à tona",
    people: ["gilmar", "dalide", "nunesmarques", "turmakn"],
    summary: "Em poucos dias, mensagens revelam Dalide Corrêa como sócia de Gilmar Mendes e um contrato de R$ 427 milhões ligado a Kassio Nunes Marques, mostrando que o padrão de proximidade com Vorcaro vai muito além de Moraes e Mendonça.",
    causes: [
      { text: "A mesma leva de mensagens do celular de Vorcaro que alimentou o relatório da PF sobre Moraes.", link: "relatorio-vaza" },
    ],
    effects: [
      { text: "Reforça a leitura de que o caso Master não é um duelo isolado entre dois ministros, mas uma rede que toca praticamente metade da Corte." },
    ],
  },
];
