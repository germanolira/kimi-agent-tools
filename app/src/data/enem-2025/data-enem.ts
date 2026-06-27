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
    text: "Glory Ames, from the White Earth reservation, is frustrated that despite the presence of several indigenous reservations near Moorhead, local Halloween stores still feature a western section with costumes such as “pow wow princess”...\n\nAo abordar um aspecto da celebração do Halloween, esse texto tem por objetivo",
    options: [
      { id: "q3-a", letter: "A", text: "denunciar a violência contra crianças indígenas." },
      { id: "q3-b", letter: "B", text: "descrever costumes tradicionais em celebrações indígenas." },
      { id: "q3-c", letter: "C", text: "valorizar as vestimentas características dos povos originários." },
      { id: "q3-d", letter: "D", text: "criticar a exploração indevida de elementos da identidade indígena." },
      { id: "q3-e", letter: "E", text: "sugerir ações de combate ao preconceito contra os povos originários." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q4",
    number: 4,
    text: "My idea of philosophy is that if it is not relevant to human problems, if it does not tell us how we can go about eradicating some of the misery in this world, then it is not worth the name of philosophy...\n\nNesse texto, ao discorrer sobre a relevância da filosofia, a escritora Angela Davis tem por objetivo",
    options: [
      { id: "q4-a", letter: "A", text: "criticá-la pela restrição temática." },
      { id: "q4-b", letter: "B", text: "vinculá-la ao universo acadêmico." },
      { id: "q4-c", letter: "C", text: "afastá-la da abordagem socrática." },
      { id: "q4-d", letter: "D", text: "aproximá-la dos problemas sociais." },
      { id: "q4-e", letter: "E", text: "responsabilizá-la pela pobreza humana." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q5",
    number: 5,
    text: "Remember the sky that you were born under, know each of the star’s stories. Remember the moon, know who she is...\n\nNesse poema, de uma autora de ascendência indígena, o eu lírico ressalta a",
    options: [
      { id: "q5-a", letter: "A", text: "potência dos astros celestes." },
      { id: "q5-b", letter: "B", text: "origem das plantas e dos animais." },
      { id: "q5-c", letter: "C", text: "importância do apego à terra natal." },
      { id: "q5-d", letter: "D", text: "relação entre seres humanos e natureza." },
      { id: "q5-e", letter: "E", text: "conexão entre o tempo real e o tempo imaginário." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q6",
    number: 6,
    text: "Estranhei muito na primeira vez que escutei a expressão “de próprio punho”. Parecia que eu ia bater em alguém. Não era bem o caso...\n\nO elemento que caracteriza esse texto como uma crônica é a",
    options: [
      { id: "q6-a", letter: "A", text: "defesa das opiniões da autora sobre um tema de interesse coletivo." },
      { id: "q6-b", letter: "B", text: "exposição sobre o uso de tecnologias nas práticas de escrita atuais." },
      { id: "q6-c", letter: "C", text: "abordagem de fatos do contexto pessoal em uma perspectiva reflexiva." },
      { id: "q6-d", letter: "D", text: "utilização de recursos linguísticos para a interlocução direta com o leitor." },
      { id: "q6-e", letter: "E", text: "apresentação de acontecimentos segundo a ordem de sucessão no tempo." }
    ],
    correctAnswer: "C"
  },
  {
    id: "q7",
    number: 7,
    text: "No que diz respeito ao gênero bilhete, a autora dessa crônica",
    options: [
      { id: "q7-a", letter: "A", text: "ressalta a formalidade na comunicação com as pessoas de sua convivência." },
      { id: "q7-b", letter: "B", text: "critica a ansiedade causada pela velocidade da comunicação." },
      { id: "q7-c", letter: "C", text: "expressa a obrigatoriedade de concisão nas anotações." },
      { id: "q7-d", letter: "D", text: "questiona a prática da escrita de próprio punho." },
      { id: "q7-e", letter: "E", text: "apresenta a diversidade de usos no cotidiano." }
    ],
    correctAnswer: "E"
  },
  {
    id: "q8",
    number: 8,
    text: "O recurso linguístico usado para marcar a síntese da opinião da autora sobre a temática desenvolvida foi o(a)",
    options: [
      { id: "q8-a", letter: "A", text: "emprego da primeira pessoa em “Estranhei muito...\"." },
      { id: "q8-b", letter: "B", text: "utilização de locução adverbial em “Na verdade...\"." },
      { id: "q8-c", letter: "C", text: "uso de pronome possessivo em “Minha letra...\"." },
      { id: "q8-d", letter: "D", text: "adoção de termo autorreflexivo em “No escritório, costumo...\"." },
      { id: "q8-e", letter: "E", text: "substituição da expressão “Do punho ao pixel” pela expressão “o punho e o pixel”." }
    ],
    correctAnswer: "E"
  },
  {
    id: "q9",
    number: 9,
    text: "Nesse texto, o que caracteriza a escrita “de próprio punho” é a letra manuscrita, enquanto a escrita digital é ilustrada pelo(a)",
    options: [
      { id: "q9-a", letter: "A", text: "utilização de tecnologias diversificadas." },
      { id: "q9-b", letter: "B", text: "desenvolvimento de novos recursos de escrita." },
      { id: "q9-c", letter: "C", text: "possibilidade de interações mediadas por telas." },
      { id: "q9-d", letter: "D", text: "diversidade de fontes tipográficas que estão disponíveis." },
      { id: "q9-e", letter: "E", text: "delimitação dos espaços onde a produção textual ocorre." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q10",
    number: 10,
    text: "A autora conclui que as novas tecnologias de escrita",
    options: [
      { id: "q10-a", letter: "A", text: "evoluem para facilitar a vida cotidiana." },
      { id: "q10-b", letter: "B", text: "alcançam diferentes realidades sociais." },
      { id: "q10-c", letter: "C", text: "coexistem com outras já estabelecidas." },
      { id: "q10-d", letter: "D", text: "promovem maior agilidade na comunicação." },
      { id: "q10-e", letter: "E", text: "surgem nos contextos em que são necessárias." }
    ],
    correctAnswer: "C"
  },
  {
    id: "q11",
    number: 11,
    text: "Com 20 anos de experiência no futebol de alto rendimento, Marina, ex-jogadora da seleção brasileira, salienta que o esporte não é tão inclusivo assim...\n\nNesse texto, a visão crítica de uma ex-atleta de futebol revela que",
    options: [
      { id: "q11-a", letter: "A", text: "os meios de comunicação invisibilizam as dificuldades presentes no esporte." },
      { id: "q11-b", letter: "B", text: "o treinamento atlético de alto nível é desestimulante para os indivíduos." },
      { id: "q11-c", letter: "C", text: "o trabalho contínuo é desvalorizado no contexto esportivo profissional." },
      { id: "q11-d", letter: "D", text: "as ações de incentivo financeiro a jovens atletas são precárias." },
      { id: "q11-e", letter: "E", text: "as publicações da mídia esportiva rotulam atletas iniciantes." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q12",
    number: 12,
    text: "No predomínio das mulheres pretas brasileiras nos Jogos Olímpicos de 2024, uma coisa chamou a atenção no pódio: elas valorizam a parte psicológica...\n\nNesse texto, as atletas brasileiras defendem o(a)",
    options: [
      { id: "q12-a", letter: "A", text: "investimento na modernização de equipamentos." },
      { id: "q12-b", letter: "B", text: "subordinação do treinamento físico ao mental." },
      { id: "q12-c", letter: "C", text: "estímulo à competição entre adversárias." },
      { id: "q12-d", letter: "D", text: "aprimoramento da expressão corporal." },
      { id: "q12-e", letter: "E", text: "importância da saúde emocional." }
    ],
    correctAnswer: "E"
  },
  {
    id: "q13",
    number: 13,
    text: "A característica fundamental no aprendizado das práticas rituais nos candomblés é o processo iniciático...\n\nA “língua de santo” tem sua importância para o patrimônio linguístico brasileiro por",
    options: [
      { id: "q13-a", letter: "A", text: "apresentar uma carga semântica mítica." },
      { id: "q13-b", letter: "B", text: "conservar elementos dos falares dos escravizados." },
      { id: "q13-c", letter: "C", text: "resgatar expressões portuguesas do período colonial." },
      { id: "q13-d", letter: "D", text: "decodificar o ritual religioso dos nossos antepassados." },
      { id: "q13-e", letter: "E", text: "favorecer a compreensão do léxico africano contemporâneo." }
    ],
    correctAnswer: "B"
  },
  {
    id: "q14",
    number: 14,
    text: "O meu medo é entrar na faculdade e tirar zero eu que nunca fui bom de matemática...\n\nNesse texto, a reiteração dos medos e das angústias do narrador exprime",
    options: [
      { id: "q14-a", letter: "A", text: "inseguranças sobre o futuro familiar." },
      { id: "q14-b", letter: "B", text: "dilemas resultantes de seu fracasso escolar." },
      { id: "q14-c", letter: "C", text: "incertezas centradas em sua condição social." },
      { id: "q14-d", letter: "D", text: "hesitações em relação à sua formação profissional." },
      { id: "q14-e", letter: "E", text: "preocupações com as políticas públicas assistenciais." }
    ],
    correctAnswer: "C"
  },
  {
    id: "q37",
    number: 37,
    text: "Desde a disseminação do rádio no Brasil, entre as décadas de 1920 e 1930...\n\nAo abordar a trajetória dos meios de comunicação, esse texto propõe uma reflexão sobre a",
    options: [
      { id: "q37-a", letter: "A", text: "tecnologia digital e seus desdobramentos no desenvolvimento da televisão." },
      { id: "q37-b", letter: "B", text: "evolução da tecnologia digital com o predomínio do podcast sobre o rádio." },
      { id: "q37-c", letter: "C", text: "permanência do rádio e sua evolução por meio da tecnologia digital." },
      { id: "q37-d", letter: "D", text: "influência da televisão sobre os programas de radiojornalismo." },
      { id: "q37-e", letter: "E", text: "interferência da tecnologia digital nas interações humanas." }
    ],
    correctAnswer: "C"
  },
  {
    id: "q38",
    number: 38,
    text: "Desenvolvendo-se nesse meio, é natural que Celina, filha mais velha de D. Adozinda, tivesse seus pequenos flirts...\n\nNesse trecho, ao explorar a descrição como recurso, o narrador cria uma ambiência sugestiva do(a)",
    options: [
      { id: "q38-a", letter: "A", text: "escárnio relacionado à degradação moral dos indivíduos." },
      { id: "q38-b", letter: "B", text: "cenário urbano marcado por condições de insalubridade." },
      { id: "q38-c", letter: "C", text: "persistência do sentimentalismo explorado pelos folhetins." },
      { id: "q38-d", letter: "D", text: "prática do enriquecimento ilícito visto nas grandes cidades." },
      { id: "q38-e", letter: "E", text: "desigualdade de gênero acentuada pela baixa escolarização." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q44",
    number: 44,
    text: "TEXTO I: Hércules é uma figura lendária da mitologia greco-romana...\nTEXTO II: O que lhe faltava de estudo lhe sobrava de boa vontade e inteligência...\n\nA comparação entre os textos I e II indica que o(a)",
    options: [
      { id: "q44-a", letter: "A", text: "intertextualidade com o mito apresentado no Texto I é um recurso presente no Texto II." },
      { id: "q44-b", letter: "B", text: "narração de fatos do Texto II sintetiza os acontecimentos retratados no Texto I." },
      { id: "q44-c", letter: "C", text: "vocabulário empregado no Texto II é ancorado em conhecimento literário." },
      { id: "q44-d", letter: "D", text: "tema do trabalho como reparação é abordado em ambos os textos." },
      { id: "q44-e", letter: "E", text: "marcação temporal no passado predomina em ambos os textos." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q45",
    number: 45,
    text: "O mais assustador do meteoro que cruzou o céu da Sibéria e explodiu no ar...\n\nCom base na organização coesiva desse texto, o(a)",
    options: [
      { id: "q45-a", letter: "A", text: "oração “que passou de raspão” refere-se ao “meteoro que cruzou o céu da Sibéria”." },
      { id: "q45-b", letter: "B", text: "expressão “sua trajetória” refere-se ao elemento textual “qualquer detrito espacial”." },
      { id: "q45-c", letter: "C", text: "palavra “isso” remete ao segmento textual posterior “os alarmes não funcionaram”." },
      { id: "q45-d", letter: "D", text: "pronome “o” em “o que nos daria tempo” remete a “ou usar nossos cartões de crédito”." },
      { id: "q45-e", letter: "E", text: "fragmento “o asteroide da Sibéria” introduz um elemento novo no texto." }
    ],
    correctAnswer: "B"
  },
  {
    id: "q46",
    number: 46,
    text: "Dos 10 aos 15 anos de idade, Virgínia adorava acompanhar seu pai...\n\nOs itinerários afetivos e socioespaciais mencionados no texto associam-se à vida dos personagens por apresentarem",
    options: [
      { id: "q46-a", letter: "A", text: "histórias conectadas e recordações do lugar." },
      { id: "q46-b", letter: "B", text: "direitos trabalhistas e produção industrial." },
      { id: "q46-c", letter: "C", text: "preconceitos linguísticos e dinâmicas territoriais." },
      { id: "q46-d", letter: "D", text: "lembranças fabris e discriminação dos operários." },
      { id: "q46-e", letter: "E", text: "experiências profissionais e segregação regional." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q47",
    number: 47,
    text: "Em 1872, havia mais de 1 milhão de votantes...\n\nDe acordo com o texto, a participação no processo eleitoral brasileiro após a Reforma de 1881 sofreu uma variação que se explica pela",
    options: [
      { id: "q47-a", letter: "A", text: "restrição de gênero." },
      { id: "q47-b", letter: "B", text: "exclusão de imigrantes." },
      { id: "q47-c", letter: "C", text: "comprovação de domicílio." },
      { id: "q47-d", letter: "D", text: "exigência da alfabetização." },
      { id: "q47-e", letter: "E", text: "obrigatoriedade do sufrágio." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q48",
    number: 48,
    text: "Pela falta de chuvas, a geração de energia eólica, solar e térmica atingiu níveis recordes em agosto de 2021...\n\nDe acordo com o texto, a dificuldade na produção de energia é causada pela alteração da(s)",
    options: [
      { id: "q48-a", letter: "A", text: "variável em pesquisas meteorológicas." },
      { id: "q48-b", letter: "B", text: "paisagem em locais estratégicos." },
      { id: "q48-c", letter: "C", text: "demandas em regiões industriais." },
      { id: "q48-d", letter: "D", text: "metas em acordos climáticos." },
      { id: "q48-e", letter: "E", text: "geologia em áreas naturais." }
    ],
    correctAnswer: "B"
  },
  {
    id: "q49",
    number: 49,
    text: "Adam Smith via o açougueiro e o padeiro não só como indivíduos buscando seus interesses financeiros...\n\nO texto defende uma motivação capitalista para o campo dos negócios, na qual o lucro se mostra associado à",
    options: [
      { id: "q49-a", letter: "A", text: "consolidação do poder político." },
      { id: "q49-b", letter: "B", text: "procura de satisfação subjetiva." },
      { id: "q49-c", letter: "C", text: "estruturação do monopólio comercial." },
      { id: "q49-d", letter: "D", text: "percepção de responsabilidade ética." },
      { id: "q49-e", letter: "E", text: "conquista do reconhecimento público." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q50",
    number: 50,
    text: "O corpo de cidadãos é o poder supremo dos Estados...\n\nNo excerto encontra-se a base da teoria clássica das três formas de governo representadas pela",
    options: [
      { id: "q50-a", letter: "A", text: "tirania, oligarquia e república." },
      { id: "q50-b", letter: "B", text: "burocracia, autarquia e império." },
      { id: "q50-c", letter: "C", text: "ditadura, autocracia e anarquia." },
      { id: "q50-d", letter: "D", text: "plutocracia, tecnocracia e demagogia." },
      { id: "q50-e", letter: "E", text: "monarquia, aristocracia e democracia." }
    ],
    correctAnswer: "E"
  },
  {
    id: "q54",
    number: 54,
    text: "Não há consenso em torno do nome dado à pandemia, tendo, desde o seu início, sido chamada de gripe espanhola...\n\nDe acordo com o texto, a denominação recebida pela pandemia do começo do século XX foi determinada pelo(a)",
    options: [
      { id: "q54-a", letter: "A", text: "precariedade dos conhecimentos da medicina militar." },
      { id: "q54-b", letter: "B", text: "retaliação da tríplice aliança aos soldados desertores." },
      { id: "q54-c", letter: "C", text: "controle dos relatos oriundos de campos de batalha." },
      { id: "q54-d", letter: "D", text: "emprego de armas biológicas em confrontos transnacionais." },
      { id: "q54-e", letter: "E", text: "circulação de refugiados contaminados em áreas conflagradas." }
    ],
    correctAnswer: "C"
  },
  {
    id: "q55",
    number: 55,
    text: "TEXTO I: A partir do século IV, com os imperadores ditos cristãos, o teatro e a dança foram condenados...\nTEXTO II: A dança no ato litúrgico cumpre tanto um papel de adoração quanto mercadológico...\n\nA percepção sobre a dança e a cultura corporal apresenta aspectos relacionados, respectivamente, a",
    options: [
      { id: "q55-a", letter: "A", text: "segregação social e intolerância eclesiástica." },
      { id: "q55-b", letter: "B", text: "rituais eucarísticos e sacramentos da Igreja." },
      { id: "q55-c", letter: "C", text: "transe individual e progresso intelectual." },
      { id: "q55-d", letter: "D", text: "penitência pessoal e juramento coletivo." },
      { id: "q55-e", letter: "E", text: "dogmatismo religioso e adesão de fiéis." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q56",
    number: 56,
    text: "A ideia de êxodo urbano assume ares caricaturais...\n\nA crítica apresentada no texto evidencia uma dinâmica socioespacial marcada pela",
    options: [
      { id: "q56-a", letter: "A", text: "valorização de tradições rurais." },
      { id: "q56-b", letter: "B", text: "redução de plantações agrícolas." },
      { id: "q56-c", letter: "C", text: "estagnação de atividades comerciais." },
      { id: "q56-d", letter: "D", text: "precariedade de infraestruturas rodoviárias." },
      { id: "q56-e", letter: "E", text: "seletividade de deslocamentos populacionais." }
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
      { id: "q62-a", letter: "A", text: "cristalização da estrutura geológica." },
      { id: "q62-b", letter: "B", text: "ação do intemperismo químico." },
      { id: "q62-c", letter: "C", text: "recomposição da mata ciliar." },
      { id: "q62-d", letter: "D", text: "acumulação de sedimentos orgânicos." },
      { id: "q62-e", letter: "E", text: "impermeabilização da superfície ocupada." }
    ],
    correctAnswer: "B"
  },
  {
    id: "q63",
    number: 63,
    text: "Moradores de Berlim protestaram contra a demolição de um trecho do muro que dividiu a cidade...\n\nA demolição do símbolo histórico mencionado representa uma",
    options: [
      { id: "q63-a", letter: "A", text: "violação da memória coletiva." },
      { id: "q63-b", letter: "B", text: "alteração das fronteiras políticas." },
      { id: "q63-c", letter: "C", text: "adesão à arquitetura neoclássica." },
      { id: "q63-d", letter: "D", text: "negação das influências orientais." },
      { id: "q63-e", letter: "E", text: "reorganização da mobilidade urbana." }
    ],
    correctAnswer: "A"
  },
  {
    id: "q64",
    number: 64,
    text: "TEXTO I: Em conjunto: todo e não todo, unido e separado...\nTEXTO II: Deus é dia-noite, inverno-verão...\n\nA característica do pensamento do filósofo Heráclito, registrada nos fragmentos mencionados, é a ênfase na",
    options: [
      { id: "q64-a", letter: "A", text: "qualidade imperecível do mundo." },
      { id: "q64-b", letter: "B", text: "degradação material da natureza." },
      { id: "q64-c", letter: "C", text: "imobilidade imanente do universo." },
      { id: "q64-d", letter: "D", text: "distribuição dicotômica do cosmos." },
      { id: "q64-e", letter: "E", text: "desordem incontornável das coisas." }
    ],
    correctAnswer: "D"
  },
  {
    id: "q65",
    number: 65,
    text: "Entre esses preconceitos estava o canibalismo. A prática não era, porém, uma mentira...\n\nNo texto, europeus e ameríndios atribuíram à prática relatada, respectivamente, o significado de",
    options: [
      { id: "q65-a", letter: "A", text: "selvageria — empoderamento." },
      { id: "q65-b", letter: "B", text: "impetuosidade — resistência." },
      { id: "q65-c", letter: "C", text: "fanatismo — humilhação." },
      { id: "q65-d", letter: "D", text: "intolerância — violência." },
      { id: "q65-e", letter: "E", text: "repressão — justiça." }
    ],
    correctAnswer: "A"
  }
];
