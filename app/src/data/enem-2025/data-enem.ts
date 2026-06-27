export type EnemQuestion = {
  id: string;
  number: number;
  text: string;
  options: { id: string; letter: string; text: string }[];
  correctAnswer: string;
};

export const enemQuestions: EnemQuestion[] = [
  {
    id: "q3",
    number: 3,
    text: "Glory Ames, da reserva White Earth, está frustrada por, apesar da presença de várias reservas indígenas próximas a Moorhead, as lojas locais de Halloween ainda terem uma seção “western” com fantasias como “princesa do pow wow”...\n\nAo abordar um aspecto da celebração do Halloween, esse texto tem por objetivo",
    options: [
      { id: "q3-a", letter: "A", text: "Denunciar a violência contra crianças indígenas." },
      { id: "q3-b", letter: "B", text: "Descrever costumes tradicionais em celebrações indígenas." },
      { id: "q3-c", letter: "C", text: "Valorizar as vestimentas características dos povos originários." },
      { id: "q3-d", letter: "D", text: "Criticar a exploração indevida de elementos da identidade indígena." },
      { id: "q3-e", letter: "E", text: "Sugerir ações de combate ao preconceito contra os povos originários." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q4",
    number: 4,
    text: "Minha ideia de filosofia é que, se ela não for relevante para os problemas humanos, se não nos disser como podemos agir para erradicar parte da miséria deste mundo, então ela não merece o nome de filosofia...\n\nNesse texto, ao discorrer sobre a relevância da filosofia, a escritora Angela Davis tem por objetivo",
    options: [
      { id: "q4-a", letter: "A", text: "Criticá-la pela restrição temática." },
      { id: "q4-b", letter: "B", text: "Vinculá-la ao universo acadêmico." },
      { id: "q4-c", letter: "C", text: "Afastá-la da abordagem socrática." },
      { id: "q4-d", letter: "D", text: "Aproximá-la dos problemas sociais." },
      { id: "q4-e", letter: "E", text: "Responsabilizá-la pela pobreza humana." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q5",
    number: 5,
    text: "Lembre-se do céu sob o qual você nasceu, conheça a história de cada uma das estrelas. Lembre-se da lua, saiba quem ela é...\n\nNesse poema, de uma autora de ascendência indígena, o eu lírico ressalta a",
    options: [
      { id: "q5-a", letter: "A", text: "Potência dos astros celestes." },
      { id: "q5-b", letter: "B", text: "Origem das plantas e dos animais." },
      { id: "q5-c", letter: "C", text: "Importância do apego à terra natal." },
      { id: "q5-d", letter: "D", text: "Relação entre seres humanos e natureza." },
      { id: "q5-e", letter: "E", text: "Conexão entre o tempo real e o tempo imaginário." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q6",
    number: 6,
    text: "Estranhei muito na primeira vez que escutei a expressão “de próprio punho”. Parecia que eu ia bater em alguém. Não era bem o caso...\n\nO elemento que caracteriza esse texto como uma crônica é a",
    options: [
      { id: "q6-a", letter: "A", text: "Defesa das opiniões da autora sobre um tema de interesse coletivo." },
      { id: "q6-b", letter: "B", text: "Exposição sobre o uso de tecnologias nas práticas de escrita atuais." },
      { id: "q6-c", letter: "C", text: "Abordagem de fatos do contexto pessoal em uma perspectiva reflexiva." },
      { id: "q6-d", letter: "D", text: "Utilização de recursos linguísticos para a interlocução direta com o leitor." },
      { id: "q6-e", letter: "E", text: "Apresentação de acontecimentos segundo a ordem de sucessão no tempo." }
    ],
    correctAnswer: "C"
  },
  {
    id: "q7",
    number: 7,
    text: "No que diz respeito ao gênero bilhete, a autora dessa crônica",
    options: [
      { id: "q7-a", letter: "A", text: "Ressalta a formalidade na comunicação com as pessoas de sua convivência." },
      { id: "q7-b", letter: "B", text: "Critica a ansiedade causada pela velocidade da comunicação." },
      { id: "q7-c", letter: "C", text: "Expressa a obrigatoriedade de concisão nas anotações." },
      { id: "q7-d", letter: "D", text: "Questiona a prática da escrita de próprio punho." },
      { id: "q7-e", letter: "E", text: "Apresenta a diversidade de usos no cotidiano." }
    ],
    correctAnswer: "E"
  },
  {
    id: "q8",
    number: 8,
    text: "O recurso linguístico usado para marcar a síntese da opinião da autora sobre a temática desenvolvida foi o(a)",
    options: [
      { id: "q8-a", letter: "A", text: "Emprego da primeira pessoa em “Estranhei muito...\"." },
      { id: "q8-b", letter: "B", text: "Utilização de locução adverbial em “Na verdade...\"." },
      { id: "q8-c", letter: "C", text: "Uso de pronome possessivo em “Minha letra...\"." },
      { id: "q8-d", letter: "D", text: "Adoção de termo autorreflexivo em “No escritório, costumo...\"." },
      { id: "q8-e", letter: "E", text: "Substituição da expressão “Do punho ao pixel” pela expressão “o punho e o pixel”." }
    ],
    correctAnswer: "E"
  },
  {
    id: "q9",
    number: 9,
    text: "Nesse texto, o que caracteriza a escrita “de próprio punho” é a letra manuscrita, enquanto a escrita digital é ilustrada pelo(a)",
    options: [
      { id: "q9-a", letter: "A", text: "Utilização de tecnologias diversificadas." },
      { id: "q9-b", letter: "B", text: "Desenvolvimento de novos recursos de escrita." },
      { id: "q9-c", letter: "C", text: "Possibilidade de interações mediadas por telas." },
      { id: "q9-d", letter: "D", text: "Diversidade de fontes tipográficas que estão disponíveis." },
      { id: "q9-e", letter: "E", text: "Delimitação dos espaços onde a produção textual ocorre." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q10",
    number: 10,
    text: "A autora conclui que as novas tecnologias de escrita",
    options: [
      { id: "q10-a", letter: "A", text: "Evoluem para facilitar a vida cotidiana." },
      { id: "q10-b", letter: "B", text: "Alcançam diferentes realidades sociais." },
      { id: "q10-c", letter: "C", text: "Coexistem com outras já estabelecidas." },
      { id: "q10-d", letter: "D", text: "Promovem maior agilidade na comunicação." },
      { id: "q10-e", letter: "E", text: "Surgem nos contextos em que são necessárias." }
    ],
    correctAnswer: "C"
  },
  {
    id: "q11",
    number: 11,
    text: "Com 20 anos de experiência no futebol de alto rendimento, Marina, ex-jogadora da seleção brasileira, salienta que o esporte não é tão inclusivo assim...\n\nNesse texto, a visão crítica de uma ex-atleta de futebol revela que",
    options: [
      { id: "q11-a", letter: "A", text: "Os meios de comunicação invisibilizam as dificuldades presentes no esporte." },
      { id: "q11-b", letter: "B", text: "O treinamento atlético de alto nível é desestimulante para os indivíduos." },
      { id: "q11-c", letter: "C", text: "O trabalho contínuo é desvalorizado no contexto esportivo profissional." },
      { id: "q11-d", letter: "D", text: "As ações de incentivo financeiro a jovens atletas são precárias." },
      { id: "q11-e", letter: "E", text: "As publicações da mídia esportiva rotulam atletas iniciantes." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q12",
    number: 12,
    text: "No predomínio das mulheres pretas brasileiras nos Jogos Olímpicos de 2024, uma coisa chamou a atenção no pódio: elas valorizam a parte psicológica...\n\nNesse texto, as atletas brasileiras defendem o(a)",
    options: [
      { id: "q12-a", letter: "A", text: "Investimento na modernização de equipamentos." },
      { id: "q12-b", letter: "B", text: "Subordinação do treinamento físico ao mental." },
      { id: "q12-c", letter: "C", text: "Estímulo à competição entre adversárias." },
      { id: "q12-d", letter: "D", text: "Aprimoramento da expressão corporal." },
      { id: "q12-e", letter: "E", text: "Importância da saúde emocional." }
    ],
    correctAnswer: "E"
  },
  {
    id: "q13",
    number: 13,
    text: "A característica fundamental no aprendizado das práticas rituais nos candomblés é o processo iniciático...\n\nA “língua de santo” tem sua importância para o patrimônio linguístico brasileiro por",
    options: [
      { id: "q13-a", letter: "A", text: "Apresentar uma carga semântica mítica." },
      { id: "q13-b", letter: "B", text: "Conservar elementos dos falares dos escravizados." },
      { id: "q13-c", letter: "C", text: "Resgatar expressões portuguesas do período colonial." },
      { id: "q13-d", letter: "D", text: "Decodificar o ritual religioso dos nossos antepassados." },
      { id: "q13-e", letter: "E", text: "Favorecer a compreensão do léxico africano contemporâneo." }
    ],
    correctAnswer: "B"
  },
  {
    id: "q14",
    number: 14,
    text: "O meu medo é entrar na faculdade e tirar zero eu que nunca fui bom de matemática...\n\nNesse texto, a reiteração dos medos e das angústias do narrador exprime",
    options: [
      { id: "q14-a", letter: "A", text: "Inseguranças sobre o futuro familiar." },
      { id: "q14-b", letter: "B", text: "Dilemas resultantes de seu fracasso escolar." },
      { id: "q14-c", letter: "C", text: "Incertezas centradas em sua condição social." },
      { id: "q14-d", letter: "D", text: "Hesitações em relação à sua formação profissional." },
      { id: "q14-e", letter: "E", text: "Preocupações com as políticas públicas assistenciais." }
    ],
    correctAnswer: "C"
  },
  {
    id: "q37",
    number: 37,
    text: "Desde a disseminação do rádio no Brasil, entre as décadas de 1920 e 1930...\n\nAo abordar a trajetória dos meios de comunicação, esse texto propõe uma reflexão sobre a",
    options: [
      { id: "q37-a", letter: "A", text: "Tecnologia digital e seus desdobramentos no desenvolvimento da televisão." },
      { id: "q37-b", letter: "B", text: "Evolução da tecnologia digital com o predomínio do podcast sobre o rádio." },
      { id: "q37-c", letter: "C", text: "Permanência do rádio e sua evolução por meio da tecnologia digital." },
      { id: "q37-d", letter: "D", text: "Influência da televisão sobre os programas de radiojornalismo." },
      { id: "q37-e", letter: "E", text: "Interferência da tecnologia digital nas interações humanas." }
    ],
    correctAnswer: "C"
  },
  {
    id: "q38",
    number: 38,
    text: "Desenvolvendo-se nesse meio, é natural que Celina, filha mais velha de D. Adozinda, tivesse seus pequenos flirts...\n\nNesse trecho, ao explorar a descrição como recurso, o narrador cria uma ambiência sugestiva do(a)",
    options: [
      { id: "q38-a", letter: "A", text: "Escárnio relacionado à degradação moral dos indivíduos." },
      { id: "q38-b", letter: "B", text: "Cenário urbano marcado por condições de insalubridade." },
      { id: "q38-c", letter: "C", text: "Persistência do sentimentalismo explorado pelos folhetins." },
      { id: "q38-d", letter: "D", text: "Prática do enriquecimento ilícito visto nas grandes cidades." },
      { id: "q38-e", letter: "E", text: "Desigualdade de gênero acentuada pela baixa escolarização." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q44",
    number: 44,
    text: "TEXTO I: Hércules é uma figura lendária da mitologia greco-romana...\nTEXTO II: O que lhe faltava de estudo lhe sobrava de boa vontade e inteligência...\n\nA comparação entre os textos I e II indica que o(a)",
    options: [
      { id: "q44-a", letter: "A", text: "Intertextualidade com o mito apresentado no Texto I é um recurso presente no Texto II." },
      { id: "q44-b", letter: "B", text: "Narração de fatos do Texto II sintetiza os acontecimentos retratados no Texto I." },
      { id: "q44-c", letter: "C", text: "Vocabulário empregado no Texto II é ancorado em conhecimento literário." },
      { id: "q44-d", letter: "D", text: "Tema do trabalho como reparação é abordado em ambos os textos." },
      { id: "q44-e", letter: "E", text: "Marcação temporal no passado predomina em ambos os textos." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q45",
    number: 45,
    text: "O mais assustador do meteoro que cruzou o céu da Sibéria e explodiu no ar...\n\nCom base na organização coesiva desse texto, o(a)",
    options: [
      { id: "q45-a", letter: "A", text: "Oração “que passou de raspão” refere-se ao “meteoro que cruzou o céu da Sibéria”." },
      { id: "q45-b", letter: "B", text: "Expressão “sua trajetória” refere-se ao elemento textual “qualquer detrito espacial”." },
      { id: "q45-c", letter: "C", text: "Palavra “isso” remete ao segmento textual posterior “os alarmes não funcionaram”." },
      { id: "q45-d", letter: "D", text: "Pronome “o” em “o que nos daria tempo” remete a “ou usar nossos cartões de crédito”." },
      { id: "q45-e", letter: "E", text: "Fragmento “o asteroide da Sibéria” introduz um elemento novo no texto." }
    ],
    correctAnswer: "B"
  },
  {
    id: "q46",
    number: 46,
    text: "Dos 10 aos 15 anos de idade, Virgínia adorava acompanhar seu pai...\n\nOs itinerários afetivos e socioespaciais mencionados no texto associam-se à vida dos personagens por apresentarem",
    options: [
      { id: "q46-a", letter: "A", text: "Histórias conectadas e recordações do lugar." },
      { id: "q46-b", letter: "B", text: "Direitos trabalhistas e produção industrial." },
      { id: "q46-c", letter: "C", text: "Preconceitos linguísticos e dinâmicas territoriais." },
      { id: "q46-d", letter: "D", text: "Lembranças fabris e discriminação dos operários." },
      { id: "q46-e", letter: "E", text: "Experiências profissionais e segregação regional." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q47",
    number: 47,
    text: "Em 1872, havia mais de 1 milhão de votantes...\n\nDe acordo com o texto, a participação no processo eleitoral brasileiro após a Reforma de 1881 sofreu uma variação que se explica pela",
    options: [
      { id: "q47-a", letter: "A", text: "Restrição de gênero." },
      { id: "q47-b", letter: "B", text: "Exclusão de imigrantes." },
      { id: "q47-c", letter: "C", text: "Comprovação de domicílio." },
      { id: "q47-d", letter: "D", text: "Exigência da alfabetização." },
      { id: "q47-e", letter: "E", text: "Obrigatoriedade do sufrágio." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q48",
    number: 48,
    text: "Pela falta de chuvas, a geração de energia eólica, solar e térmica atingiu níveis recordes em agosto de 2021...\n\nDe acordo com o texto, a dificuldade na produção de energia é causada pela alteração da(s)",
    options: [
      { id: "q48-a", letter: "A", text: "Variável em pesquisas meteorológicas." },
      { id: "q48-b", letter: "B", text: "Paisagem em locais estratégicos." },
      { id: "q48-c", letter: "C", text: "Demandas em regiões industriais." },
      { id: "q48-d", letter: "D", text: "Metas em acordos climáticos." },
      { id: "q48-e", letter: "E", text: "Geologia em áreas naturais." }
    ],
    correctAnswer: "B"
  },
  {
    id: "q49",
    number: 49,
    text: "Adam Smith via o açougueiro e o padeiro não só como indivíduos buscando seus interesses financeiros...\n\nO texto defende uma motivação capitalista para o campo dos negócios, na qual o lucro se mostra associado à",
    options: [
      { id: "q49-a", letter: "A", text: "Consolidação do poder político." },
      { id: "q49-b", letter: "B", text: "Procura de satisfação subjetiva." },
      { id: "q49-c", letter: "C", text: "Estruturação do monopólio comercial." },
      { id: "q49-d", letter: "D", text: "Percepção de responsabilidade ética." },
      { id: "q49-e", letter: "E", text: "Conquista do reconhecimento público." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q50",
    number: 50,
    text: "O corpo de cidadãos é o poder supremo dos Estados...\n\nNo excerto encontra-se a base da teoria clássica das três formas de governo representadas pela",
    options: [
      { id: "q50-a", letter: "A", text: "Tirania, oligarquia e república." },
      { id: "q50-b", letter: "B", text: "Burocracia, autarquia e império." },
      { id: "q50-c", letter: "C", text: "Ditadura, autocracia e anarquia." },
      { id: "q50-d", letter: "D", text: "Plutocracia, tecnocracia e demagogia." },
      { id: "q50-e", letter: "E", text: "Monarquia, aristocracia e democracia." }
    ],
    correctAnswer: "E"
  },
  {
    id: "q54",
    number: 54,
    text: "Não há consenso em torno do nome dado à pandemia, tendo, desde o seu início, sido chamada de gripe espanhola...\n\nDe acordo com o texto, a denominação recebida pela pandemia do começo do século XX foi determinada pelo(a)",
    options: [
      { id: "q54-a", letter: "A", text: "Precariedade dos conhecimentos da medicina militar." },
      { id: "q54-b", letter: "B", text: "Retaliação da tríplice aliança aos soldados desertores." },
      { id: "q54-c", letter: "C", text: "Controle dos relatos oriundos de campos de batalha." },
      { id: "q54-d", letter: "D", text: "Emprego de armas biológicas em confrontos transnacionais." },
      { id: "q54-e", letter: "E", text: "Circulação de refugiados contaminados em áreas conflagradas." }
    ],
    correctAnswer: "C"
  },
  {
    id: "q55",
    number: 55,
    text: "TEXTO I: A partir do século IV, com os imperadores ditos cristãos, o teatro e a dança foram condenados...\nTEXTO II: A dança no ato litúrgico cumpre tanto um papel de adoração quanto mercadológico...\n\nA percepção sobre a dança e a cultura corporal apresenta aspectos relacionados, respectivamente, a",
    options: [
      { id: "q55-a", letter: "A", text: "Segregação social e intolerância eclesiástica." },
      { id: "q55-b", letter: "B", text: "Rituais eucarísticos e sacramentos da Igreja." },
      { id: "q55-c", letter: "C", text: "Transe individual e progresso intelectual." },
      { id: "q55-d", letter: "D", text: "Penitência pessoal e juramento coletivo." },
      { id: "q55-e", letter: "E", text: "Dogmatismo religioso e adesão de fiéis." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q56",
    number: 56,
    text: "A ideia de êxodo urbano assume ares caricaturais...\n\nA crítica apresentada no texto evidencia uma dinâmica socioespacial marcada pela",
    options: [
      { id: "q56-a", letter: "A", text: "Valorização de tradições rurais." },
      { id: "q56-b", letter: "B", text: "Redução de plantações agrícolas." },
      { id: "q56-c", letter: "C", text: "Estagnação de atividades comerciais." },
      { id: "q56-d", letter: "D", text: "Precariedade de infraestruturas rodoviárias." },
      { id: "q56-e", letter: "E", text: "Seletividade de deslocamentos populacionais." }
    ],
    correctAnswer: "E"
  },
  {
    id: "q57",
    number: 57,
    text: "A “invenção” dessa nova anatomia política não deve ser entendida como uma descoberta súbita...\n\nO texto indica o seguinte aspecto da disciplina como ferramenta política:",
    options: [
      { id: "q57-a", letter: "A", text: "Expansão das técnicas de suplício." },
      { id: "q57-b", letter: "B", text: "Judicialização das relações de poder." },
      { id: "q57-c", letter: "C", text: "Dissolução das distinções de nobreza." },
      { id: "q57-d", letter: "D", text: "Capilarização das práticas de controle." },
      { id: "q57-e", letter: "E", text: "Espetacularização das medidas de penitência." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q58",
    number: 58,
    text: "Por séculos, o Rio Reno tem sido uma rota de navegação confiável...\n\nQual é o efeito econômico do problema ambiental apresentado no texto?",
    options: [
      { id: "q58-a", letter: "A", text: "Supressão da extração de minério." },
      { id: "q58-b", letter: "B", text: "Intensificação da atividade de pesca." },
      { id: "q58-c", letter: "C", text: "Encarecimento da logística de transporte." },
      { id: "q58-d", letter: "D", text: "Inviabilização da agricultura de subsistência." },
      { id: "q58-e", letter: "E", text: "Sucateamento da indústria de transformação." }
    ],
    correctAnswer: "C"
  },
  {
    id: "q62",
    number: 62,
    text: "Nos Estados Unidos, um hotel perto de um parque foi engolido por uma enorme cratera...\n\nA situação de desmoronamento do solo descrita no texto origina-se da",
    options: [
      { id: "q62-a", letter: "A", text: "Cristalização da estrutura geológica." },
      { id: "q62-b", letter: "B", text: "Ação do intemperismo químico." },
      { id: "q62-c", letter: "C", text: "Recomposição da mata ciliar." },
      { id: "q62-d", letter: "D", text: "Acumulação de sedimentos orgânicos." },
      { id: "q62-e", letter: "E", text: "Impermeabilização da superfície ocupada." }
    ],
    correctAnswer: "B"
  },
  {
    id: "q63",
    number: 63,
    text: "Moradores de Berlim protestaram contra a demolição de um trecho do muro que dividiu a cidade...\n\nA demolição do símbolo histórico mencionado representa uma",
    options: [
      { id: "q63-a", letter: "A", text: "Violação da memória coletiva." },
      { id: "q63-b", letter: "B", text: "Alteração das fronteiras políticas." },
      { id: "q63-c", letter: "C", text: "Adesão à arquitetura neoclássica." },
      { id: "q63-d", letter: "D", text: "Negação das influências orientais." },
      { id: "q63-e", letter: "E", text: "Reorganização da mobilidade urbana." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q64",
    number: 64,
    text: "TEXTO I: Em conjunto: todo e não todo, unido e separado...\nTEXTO II: Deus é dia-noite, inverno-verão...\n\nA característica do pensamento do filósofo Heráclito, registrada nos fragmentos mencionados, é a ênfase na",
    options: [
      { id: "q64-a", letter: "A", text: "Qualidade imperecível do mundo." },
      { id: "q64-b", letter: "B", text: "Degradação material da natureza." },
      { id: "q64-c", letter: "C", text: "Imobilidade imanente do universo." },
      { id: "q64-d", letter: "D", text: "Distribuição dicotômica do cosmos." },
      { id: "q64-e", letter: "E", text: "Desordem incontornável das coisas." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q65",
    number: 65,
    text: "Entre esses preconceitos estava o canibalismo. A prática não era, porém, uma mentira...\n\nNo texto, europeus e ameríndios atribuíram à prática relatada, respectivamente, o significado de",
    options: [
      { id: "q65-a", letter: "A", text: "Selvageria — empoderamento." },
      { id: "q65-b", letter: "B", text: "Impetuosidade — resistência." },
      { id: "q65-c", letter: "C", text: "Fanatismo — humilhação." },
      { id: "q65-d", letter: "D", text: "Intolerância — violência." },
      { id: "q65-e", letter: "E", text: "Repressão — justiça." }
    ],
    correctAnswer: "A"
  }
];
