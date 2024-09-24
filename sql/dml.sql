INSERT INTO "user" (username, password) VALUES ('prof_biologia', 'senha123');
INSERT INTO "user" (username, password) VALUES ('prof_fisica', 'senha123');
INSERT INTO "user" (username, password) VALUES ('prof_geografia', 'senha123');
INSERT INTO "user" (username, password) VALUES ('prof_historia', 'senha123');
INSERT INTO "user" (username, password) VALUES ('prof_ingles', 'senha123');
INSERT INTO "user" (username, password) VALUES ('prof_matematica', 'senha123');
INSERT INTO "user" (username, password) VALUES ('prof_portugues', 'senha123');
INSERT INTO "user" (username, password) VALUES ('prof_quimica', 'senha123');

INSERT INTO teacher (name, school_subject, user_id) VALUES ('Ana Silva', 'biologia', 1);
INSERT INTO teacher (name, school_subject, user_id) VALUES ('Carlos Souza', 'fisica', 2);
INSERT INTO teacher (name, school_subject, user_id) VALUES ('Maria Costa', 'geografia', 3);
INSERT INTO teacher (name, school_subject, user_id) VALUES ('Paulo Lima', 'historia', 4);
INSERT INTO teacher (name, school_subject, user_id) VALUES ('Joana Alves', 'ingles', 5);
INSERT INTO teacher (name, school_subject, user_id) VALUES ('Rafael Braga', 'matematica', 6);
INSERT INTO teacher (name, school_subject, user_id) VALUES ('Lucia Mota', 'portugues', 7);
INSERT INTO teacher (name, school_subject, user_id) VALUES ('Marcos Pereira', 'quimica', 8);

-- Posts do professor de biologia (Ana Silva)
INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('Células e sua importância para os organismos', 
'A célula é a menor unidade estrutural e funcional de um organismo, e é considerada a base da vida. Todas as funções vitais de um organismo ocorrem dentro das células. Existem dois tipos principais de células: procariontes e eucariontes. As células procariontes, como as bactérias, não possuem um núcleo definido, enquanto as células eucariontes, que compõem animais, plantas e fungos, possuem um núcleo delimitado por uma membrana nuclear. Cada célula realiza diversas funções, como produção de energia, síntese de proteínas e reprodução. O estudo das células, chamado de biologia celular, é fundamental para compreender como os organismos se desenvolvem, crescem e mantêm suas funções. A pesquisa em células também tem aplicações na medicina, como a terapia celular, que busca reparar tecidos danificados por doenças ou lesões. A biologia celular continua sendo um campo essencial de estudo para compreender a complexidade da vida.', 
'https://storage.googleapis.com/blog_img/img-bio.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Ana Silva'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('Ecologia: relações entre organismos e o ambiente', 
'Ecologia é o ramo da biologia que estuda as interações entre os organismos e o ambiente em que vivem. Ela analisa como os organismos, sejam plantas, animais ou microrganismos, interagem com fatores abióticos, como clima, solo e água, além das relações entre as diferentes espécies. Esses estudos são cruciais para compreender como os ecossistemas funcionam e como as atividades humanas afetam o meio ambiente. Com a crescente preocupação sobre as mudanças climáticas, a ecologia tornou-se ainda mais importante, pois ajuda a identificar estratégias para preservar a biodiversidade e promover o desenvolvimento sustentável. O desequilíbrio ecológico pode levar à extinção de espécies e à degradação de habitats, impactando a vida na Terra. Assim, a ecologia é uma ciência vital para a preservação dos recursos naturais e para garantir um futuro equilibrado para as gerações futuras.', 
'https://storage.googleapis.com/blog_img/img-bio.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Ana Silva'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A evolução das espécies', 
'A teoria da evolução, proposta por Charles Darwin, é um dos pilares fundamentais da biologia moderna. Ela explica como as espécies mudam ao longo do tempo através de um processo chamado seleção natural. De acordo com essa teoria, os organismos que possuem características vantajosas em seu ambiente têm mais chances de sobreviver e se reproduzir, passando essas características para seus descendentes. Ao longo de muitas gerações, essas pequenas mudanças podem resultar no surgimento de novas espécies. A evolução não é apenas uma teoria sobre o passado, mas continua a ser um processo ativo no presente, como podemos observar com o desenvolvimento da resistência de bactérias a antibióticos, por exemplo. Compreender a evolução é essencial para áreas como medicina, ecologia e genética, e continua a ser um dos campos de estudo mais fascinantes da biologia.', 
'https://storage.googleapis.com/blog_img/img-bio.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Ana Silva'));

-- Posts do professor de física (Carlos Souza)
INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('Termodinâmica e o Equilíbrio Térmico', 
'Termodinâmica é o ramo da física que estuda as relações entre calor, trabalho e energia. Um dos conceitos centrais da termodinâmica é o equilíbrio térmico, que ocorre quando dois ou mais corpos em contato atingem a mesma temperatura. O princípio que rege esse comportamento é conhecido como Lei Zero da Termodinâmica, que afirma que se dois sistemas estão em equilíbrio térmico com um terceiro, eles também estão em equilíbrio entre si. Esse conceito é fundamental para o funcionamento de termômetros e sistemas de aquecimento. Além disso, a termodinâmica também envolve o estudo das transformações de energia, como na Primeira Lei da Termodinâmica, que trata da conservação de energia em sistemas termodinâmicos. O entendimento desses princípios é crucial para diversas aplicações, desde motores a combustão até sistemas de refrigeração, e é amplamente utilizado em áreas da engenharia, meteorologia e até mesmo em processos biológicos. O equilíbrio térmico e as trocas de calor são fenômenos do nosso cotidiano, desde um banho quente esfriando com o tempo até a refrigeração de alimentos em um freezer.', 
'https://storage.googleapis.com/blog_img/img-fis.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Carlos Souza'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('Eletromagnetismo: Campo Elétrico e Força Magnética', 
'O eletromagnetismo é uma das áreas mais fascinantes da física e trata do estudo de campos elétricos e magnéticos e de suas interações. O campo elétrico é uma região do espaço onde uma carga elétrica experimenta uma força. Ele é gerado por cargas elétricas e pode ser visualizado através de linhas de campo, que mostram a direção da força que uma carga positiva experimentaria. Já a força magnética atua sobre cargas elétricas em movimento, o que pode ser observado em fenômenos como a atração e repulsão entre ímãs. O estudo dessas interações é essencial para entender como funcionam motores elétricos, geradores e até a propagação de ondas de rádio. O eletromagnetismo também tem implicações na tecnologia moderna, como na transmissão de energia elétrica e nas comunicações sem fio. Além disso, ele está presente em inúmeros fenômenos naturais, como as auroras boreais, e é fundamental para o funcionamento de dispositivos eletrônicos, como telefones celulares e computadores.', 
'https://storage.googleapis.com/blog_img/img-fis.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Carlos Souza'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('O Movimento Harmônico Simples (MHS)', 
'O Movimento Harmônico Simples (MHS) é um tipo de movimento oscilatório que ocorre em sistemas físicos como pêndulos e molas. No MHS, um objeto oscila em torno de uma posição de equilíbrio, onde a força restauradora é diretamente proporcional ao deslocamento do objeto em relação a essa posição. Um exemplo clássico é o pêndulo de um relógio, onde a força gravitacional age como a força restauradora. A equação que descreve o MHS é baseada na função seno ou cosseno, e envolve conceitos como amplitude, período e frequência. Esse tipo de movimento é fundamental para o estudo de ondas mecânicas e eletromagnéticas. Além disso, o MHS tem aplicações em diversas áreas da engenharia e física, como no design de sistemas de suspensão em automóveis e na análise de vibrações em estruturas. O estudo do MHS permite a compreensão de como as forças atuam em sistemas oscilatórios e como a energia é transferida nesses processos.', 
'https://storage.googleapis.com/blog_img/img-fis.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Carlos Souza'));

-- Posts da professora de geografia (Maria Costa)
INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A Importância da Geografia na Compreensão do Mundo Atual', 
'A Geografia é uma disciplina essencial para a compreensão das complexas interações entre o ser humano e o ambiente. Ela estuda desde a distribuição das paisagens naturais até as dinâmicas populacionais e urbanas, permitindo que possamos entender melhor os problemas ambientais, sociais e econômicos que afetam o planeta. Através da análise geográfica, é possível identificar padrões de consumo de recursos naturais, mudanças climáticas, e até as causas e consequências dos fenômenos migratórios. No mundo globalizado, o conhecimento geográfico é cada vez mais relevante, pois ajuda na tomada de decisões sustentáveis e no planejamento urbano e rural. A disciplina também contribui para a valorização da diversidade cultural e das diferenças regionais, ampliando a consciência sobre a importância de práticas sustentáveis para preservar os recursos naturais e a qualidade de vida para futuras gerações.', 
'https://storage.googleapis.com/blog_img/img-geo.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Maria Costa'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('Mudanças Climáticas: Causas e Consequências', 
'As mudanças climáticas são um dos maiores desafios enfrentados pela humanidade no século XXI. Elas resultam, em grande parte, da emissão de gases de efeito estufa, como o dióxido de carbono, liberados por atividades humanas, incluindo a queima de combustíveis fósseis e o desmatamento. As consequências dessas mudanças são profundas e afetam diversos aspectos da vida no planeta, desde o aumento do nível dos oceanos até eventos climáticos extremos, como secas prolongadas e tempestades mais intensas. Os impactos nas populações humanas são significativos, com deslocamentos forçados, crises alimentares e hídricas, além de consequências econômicas severas. Entender a geografia das mudanças climáticas é crucial para o desenvolvimento de estratégias de mitigação e adaptação, buscando minimizar os efeitos e proteger as comunidades mais vulneráveis.', 
'https://storage.googleapis.com/blog_img/img-geo.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Maria Costa'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('Globalização e seus Impactos nas Regiões Periféricas', 
'A globalização tem transformado o mundo em uma rede interconectada de fluxos de capital, bens, pessoas e informações. Embora traga muitos benefícios, como a facilitação do comércio e a circulação de ideias, seus impactos são desiguais, especialmente nas regiões periféricas do globo. Estas áreas, frequentemente localizadas nos países em desenvolvimento, sofrem com a exploração de seus recursos naturais e mão de obra barata, enquanto os lucros são concentrados em regiões centrais. A desigualdade global, intensificada pela globalização, resulta em desequilíbrios sociais e econômicos, exacerbando a pobreza e os conflitos regionais. A geografia é essencial para entender essa dinâmica, pois ela permite analisar como os processos globais afetam as realidades locais e regionais, identificando os desafios e oportunidades que surgem a partir dessa complexa relação entre centro e periferia.', 
'https://storage.googleapis.com/blog_img/img-geo.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Maria Costa'));

-- Posts do professor de história (Paulo Lima)
INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A Revolução Francesa: Um Marco na História Mundial', 
'A Revolução Francesa, ocorrida entre 1789 e 1799, foi um dos eventos mais importantes da história moderna. Ela marcou o fim do Antigo Regime na França, um sistema que concentrava poder nas mãos do rei e da nobreza, enquanto a maioria da população vivia em extrema pobreza. O movimento revolucionário começou devido à insatisfação generalizada com as condições sociais, políticas e econômicas. Entre os principais marcos da Revolução estão a Queda da Bastilha, o Reinado do Terror e a ascensão de Napoleão Bonaparte. A Revolução também foi responsável pela Declaração dos Direitos do Homem e do Cidadão, que estabeleceu novos princípios de liberdade, igualdade e fraternidade. Esses ideais revolucionários não ficaram restritos à França, espalhando-se pelo mundo e influenciando diversas outras nações em sua busca por democracia e justiça social. A Revolução Francesa alterou o curso da história, abolindo privilégios aristocráticos e criando novos parâmetros para a organização política das sociedades ocidentais.', 
'https://storage.googleapis.com/blog_img/img-hist.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Paulo Lima'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A Era Vargas: Transformações Políticas no Brasil', 
'Getúlio Vargas é uma das figuras mais emblemáticas da história brasileira, tendo governado o Brasil por quase duas décadas em diferentes momentos. Seu primeiro período de governo, conhecido como Era Vargas (1930-1945), trouxe profundas mudanças políticas, sociais e econômicas ao país. Durante esse período, Vargas implementou reformas trabalhistas que resultaram na criação de leis que regulavam as jornadas de trabalho, salários mínimos e férias remuneradas. Além disso, o governo de Vargas teve um papel crucial na industrialização do Brasil, criando empresas estatais como a Companhia Siderúrgica Nacional (CSN). Outro marco desse período foi a promulgação da Constituição de 1937, que deu início ao Estado Novo, um regime autoritário que consolidou Vargas no poder. Embora controverso, Vargas conseguiu criar uma base de apoio popular entre os trabalhadores urbanos, ao mesmo tempo em que enfrentou oposição de setores conservadores e da elite agrária. A Era Vargas moldou a estrutura do Brasil moderno, com legados que ainda repercutem na política e economia do país.', 
'https://storage.googleapis.com/blog_img/img-hist.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Paulo Lima'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A Segunda Guerra Mundial e seus Impactos Globais', 
'A Segunda Guerra Mundial, que durou de 1939 a 1945, foi o maior conflito armado da história da humanidade, envolvendo as principais potências globais e resultando em consequências devastadoras para o mundo. O conflito começou com a invasão da Polônia pela Alemanha nazista e rapidamente se espalhou pela Europa, Ásia, África e os oceanos. As potências do Eixo, lideradas pela Alemanha, Itália e Japão, enfrentaram os Aliados, que incluíam Estados Unidos, Reino Unido e União Soviética. Entre as batalhas mais significativas estavam a Batalha de Stalingrado, a Batalha de Midway e o Dia D, que marcaram reviravoltas decisivas na guerra. O impacto da guerra foi profundo e abrangente: cerca de 70 milhões de pessoas perderam suas vidas, incluindo civis e militares, e as atrocidades cometidas, como o Holocausto, chocaram o mundo. A guerra também resultou na queda de regimes totalitários e na criação da Organização das Nações Unidas (ONU) em 1945, com o objetivo de promover a paz e prevenir futuros conflitos. O uso de armas nucleares pelos Estados Unidos em Hiroshima e Nagasaki introduziu uma nova era de tensão, inaugurando a Guerra Fria, que dominou a política mundial nas décadas seguintes. A Segunda Guerra Mundial não apenas redesenhou fronteiras, mas também acelerou processos de descolonização e mudanças sociais, cujos efeitos ainda são sentidos na sociedade contemporânea.', 
'https://storage.googleapis.com/blog_img/img-hist.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Paulo Lima'));

-- Posts do professor de inglês (Joana Alves)
INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A importância do inglês no mundo globalizado', 
'No mundo atual, o domínio da língua inglesa é uma habilidade essencial para quem deseja ampliar suas oportunidades profissionais e acadêmicas. Como a língua franca do mundo dos negócios, da ciência e da tecnologia, o inglês permite a comunicação entre pessoas de diferentes países e culturas. Aprender inglês não só ajuda na compreensão de materiais e documentos internacionais, como também facilita o acesso a novas ideias e tecnologias. Além disso, a habilidade de se comunicar em inglês pode abrir portas para carreiras no exterior e colaborações internacionais. Com a internet e o avanço da globalização, a necessidade de falar inglês nunca foi tão evidente. Desde filmes e séries até pesquisas científicas e programas de intercâmbio, o inglês é a chave que abre muitas dessas oportunidades. Portanto, investir no aprendizado contínuo do idioma é essencial para quem deseja se destacar no mercado de trabalho e no mundo acadêmico.', 
'https://storage.googleapis.com/blog_img/img-ing.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Joana Alves'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('Dicas para melhorar a pronúncia em inglês', 
'Aprender inglês vai muito além de memorizar vocabulário e gramática. Um dos maiores desafios para os estudantes é melhorar a pronúncia, tornando-se mais fluentes e confiantes ao falar. Uma boa pronúncia facilita a comunicação e ajuda a evitar mal-entendidos. Uma dica importante é praticar a escuta ativa, ou seja, ouvir músicas, podcasts e assistir filmes em inglês, prestando atenção nos sons das palavras e na forma como são pronunciadas. Outra estratégia é falar em voz alta, repetindo palavras e frases para treinar os músculos da fala e se acostumar com os sons. Também é útil gravar a própria voz e compará-la com a de falantes nativos, identificando os pontos que podem ser ajustados. Finalmente, o mais importante é não ter medo de errar; cada erro é uma oportunidade de aprendizado. Com dedicação e prática, a pronúncia em inglês pode melhorar consideravelmente.', 
'https://storage.googleapis.com/blog_img/img-ing.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Joana Alves'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('Os tempos verbais em inglês e suas aplicações', 
'O domínio dos tempos verbais é fundamental para a fluência em inglês. Compreender quando e como usar o presente, o passado e o futuro é crucial para comunicar-se de forma eficaz. O presente simples, por exemplo, é utilizado para expressar hábitos e fatos gerais, enquanto o presente contínuo descreve ações que estão ocorrendo no momento da fala. Já o passado simples é usado para narrar eventos concluídos, e o futuro pode ser expresso de diversas maneiras, dependendo da certeza ou intenção em relação ao que está por vir. Além disso, tempos verbais como o presente perfeito e o passado contínuo adicionam nuances e ajudam a tornar a comunicação mais precisa e natural. Praticar os tempos verbais com exercícios e diálogos do dia a dia é uma excelente maneira de internalizá-los. Com a prática constante, é possível melhorar a compreensão e aplicação desses tempos verbais, tornando a comunicação em inglês mais fluida e correta.', 
'https://storage.googleapis.com/blog_img/img-ing.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Joana Alves'));

-- Posts do professor de matemática (Rafael Braga)
INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A importância da Matemática na Vida Cotidiana', 
'A matemática está presente em nosso dia a dia de diversas formas, muitas vezes sem que percebamos. Desde o simples ato de fazer compras, onde precisamos calcular descontos e somar valores, até decisões financeiras mais complexas, como investimentos e economias. Além disso, a matemática é fundamental em áreas como engenharia, arquitetura e ciências da computação. Ela nos ajuda a entender padrões, a resolver problemas e a tomar decisões mais informadas. Compreender os conceitos matemáticos pode melhorar nossas habilidades analíticas e de raciocínio lógico, que são cruciais em um mundo cada vez mais orientado por dados. Portanto, desenvolver uma base sólida em matemática não é apenas importante para quem deseja seguir carreiras científicas, mas é um diferencial em qualquer área de atuação. Aprender matemática é aprender a pensar de forma crítica e a abordar desafios com uma mente analítica.', 
'https://storage.googleapis.com/blog_img/img-mat.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Rafael Braga'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('Geometria: A Arte dos Formatos', 
'A geometria é um ramo da matemática que estuda as propriedades e as relações de figuras no espaço. Desde a antiguidade, a geometria tem sido uma ferramenta poderosa não apenas para matemáticos, mas também para artistas e arquitetos. Compreender formas, ângulos e volumes nos ajuda a visualizar o mundo ao nosso redor e a criar objetos esteticamente agradáveis. As regras da geometria são aplicadas na construção de prédios, na criação de obras de arte e até mesmo no design gráfico. A beleza da geometria está em sua simplicidade e complexidade, onde figuras básicas podem se unir para formar composições complexas. Estudar geometria nos permite apreciar melhor o design e a estrutura ao nosso redor, estimulando a criatividade e a inovação. Além disso, a geometria é uma parte fundamental da matemática que se conecta com a álgebra e a trigonometria, formando a base para disciplinas mais avançadas.', 
'https://storage.googleapis.com/blog_img/img-mat.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Rafael Braga'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A Trigonometria e Suas Aplicações', 
'A trigonometria é um ramo da matemática que estuda as relações entre os ângulos e os lados dos triângulos. Esse campo é essencial para diversas áreas do conhecimento, como física, engenharia, astronomia e até mesmo na arte. A trigonometria permite que possamos calcular distâncias e alturas de objetos inacessíveis, como montanhas ou edifícios, usando conceitos como senos, cossenos e tangentes. Além disso, suas aplicações vão além da matemática pura; ela é amplamente utilizada em técnicas de navegação, na construção de pontes e na análise de ondas sonoras e de luz. Compreender a trigonometria pode abrir portas para uma melhor compreensão de fenômenos naturais e tecnológicos, permitindo que possamos modelar e prever comportamentos. Aprofundar-se nesse assunto é fundamental para aqueles que desejam seguir carreiras nas ciências exatas e aplicadas, contribuindo para inovações e descobertas em diversos campos.', 
'https://storage.googleapis.com/blog_img/img-mat.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Rafael Braga'));

-- Posts do professor de português (Lucia Mota)
INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A importância da Leitura', 
'A leitura é uma das habilidades mais essenciais que um ser humano pode desenvolver ao longo da vida. Ela não apenas nos permite acessar um vasto conhecimento, mas também estimula a imaginação e a criatividade. Ler é um exercício mental que promove a concentração e o foco, habilidades fundamentais em um mundo cheio de distrações. Além disso, a leitura nos expõe a novas ideias e perspectivas, ampliando nosso entendimento sobre diferentes culturas e realidades. Através dos livros, podemos viajar para lugares distantes, conhecer personagens intrigantes e nos deparar com situações que nos fazem refletir sobre nossas próprias vidas. Ler diariamente, mesmo que apenas alguns minutos, pode melhorar significativamente nossa capacidade de comunicação, aumentando nosso vocabulário e aprimorando nossa escrita. Assim, cultivar o hábito da leitura é essencial para o desenvolvimento pessoal e profissional, e deve ser incentivado desde a infância. Ler é um ato de liberdade, que nos permite escolher nosso próprio caminho e expandir nossos horizontes.', 
'https://storage.googleapis.com/blog_img/img-port.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Lucia Mota'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('Gramática e suas Regras', 
'A gramática é o conjunto de regras que regem o uso da língua e é fundamental para uma comunicação clara e eficaz. Ela nos ensina como construir frases, utilizar a pontuação corretamente e empregar os tempos verbais de maneira adequada. Embora muitos considerem a gramática como uma disciplina difícil ou entediante, ela é, na verdade, a base de qualquer língua. Compreender a gramática nos permite evitar mal-entendidos e expressar nossas ideias com precisão. É importante destacar que a língua é dinâmica e está sempre em evolução, o que significa que as regras gramaticais podem mudar com o tempo. Portanto, é essencial estudar e praticar continuamente. Além disso, conhecer as regras gramaticais não só melhora nossa escrita, mas também enriquece nossa fala. Por isso, dedicar um tempo ao aprendizado da gramática é um investimento valioso para quem deseja se comunicar de forma eficaz e confiante.', 
'https://storage.googleapis.com/blog_img/img-port.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Lucia Mota'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A Literatura Brasileira', 
'A literatura brasileira é um dos patrimônios culturais mais ricos do Brasil, refletindo a diversidade e a complexidade da sociedade brasileira. Desde os primeiros escritos do período colonial até a contemporaneidade, a literatura brasileira abrange uma variedade de gêneros, estilos e temas. Autores como Machado de Assis, Clarice Lispector, Jorge Amado e Guimarães Rosa deixaram um legado significativo, explorando questões sociais, políticas e existenciais através de suas obras. A literatura não é apenas uma forma de entretenimento, mas também uma ferramenta poderosa para a crítica social e a reflexão. Ela nos ajuda a compreender nossa história, nossas identidades e nossos desafios. Além disso, a literatura brasileira é marcada pela riqueza de suas tradições orais, que influenciam a escrita e a cultura do país. Ler literatura brasileira é, portanto, uma forma de se conectar com a alma do Brasil, e é um convite à reflexão e à apreciação das múltiplas vozes que compõem nossa identidade nacional.', 
'https://storage.googleapis.com/blog_img/img-port.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Lucia Mota'));

-- Posts do professor de Química (Marcos Pereira)
INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('Reações Químicas: O Que São e Como Funcionam?', 
'Reações químicas são processos nos quais substâncias iniciais, chamadas reagentes, se transformam em novas substâncias, conhecidas como produtos. Este fenômeno ocorre através de rearranjos de átomos e ligações químicas, resultando em mudanças nas propriedades físicas e químicas dos materiais. A compreensão das reações químicas é fundamental para várias áreas, incluindo química, biologia e engenharia. Existem diferentes tipos de reações químicas, como reações de síntese, decomposição, deslocamento e combustão. Cada tipo apresenta características específicas em relação à transferência de energia e ao comportamento dos reagentes e produtos. Por exemplo, em uma reação de combustão, uma substância reage com oxigênio, liberando calor e luz, enquanto em reações de síntese, dois ou mais reagentes se combinam para formar um único produto. O estudo das reações químicas não apenas fornece insights sobre a natureza dos materiais, mas também é essencial para o desenvolvimento de novas tecnologias e medicamentos, tornando-se uma área de pesquisa vital na ciência moderna.', 
'https://storage.googleapis.com/blog_img/img-quim.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Marcos Pereira'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A Tabela Periódica dos Elementos: Uma Ferramenta Essencial', 
'A tabela periódica é uma das ferramentas mais importantes na química, organizando todos os elementos conhecidos de acordo com suas propriedades químicas e físicas. Criada por Dmitri Mendeléiev em 1869, a tabela é organizada em linhas horizontais, chamadas períodos, e colunas verticais, conhecidas como grupos. Cada elemento na tabela é representado por um símbolo químico e contém informações como número atômico e massa atômica. Os elementos são classificados em metais, não metais e metaloides, e suas propriedades variam significativamente entre essas categorias. A tabela periódica não apenas facilita a compreensão das interações entre diferentes elementos, mas também fornece uma base para prever o comportamento químico de substâncias. Além disso, a tabela é um recurso vital para estudantes e profissionais da química, pois permite uma compreensão rápida das relações entre os elementos e suas composições. Com a adição de novos elementos ao longo dos anos, a tabela periódica continua a evoluir, refletindo as descobertas contínuas na ciência dos materiais.', 
'https://storage.googleapis.com/blog_img/img-quim.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Marcos Pereira'));

INSERT INTO post (title, content, urlImage, createdAt, teacher_id) 
VALUES ('A Importância da Química na Vida Cotidiana', 
'A química desempenha um papel fundamental em nossas vidas diárias, influenciando tudo, desde a composição dos alimentos que consumimos até os produtos de limpeza que usamos. As reações químicas estão por trás dos processos de digestão, proporcionando os nutrientes necessários para nosso corpo funcionar. Além disso, a química é essencial na fabricação de medicamentos, permitindo o desenvolvimento de tratamentos eficazes para diversas doenças. Os produtos químicos presentes em nossa casa, como detergentes e desinfetantes, são formulados para interagir com sujeira e germes, mantendo nosso ambiente limpo e seguro. A química também é vital na indústria, onde processos químicos são utilizados para produzir plásticos, combustíveis e muitos outros materiais essenciais. À medida que enfrentamos desafios globais, como a poluição e a escassez de recursos, o conhecimento químico torna-se cada vez mais importante para encontrar soluções sustentáveis. Portanto, a química não é apenas uma disciplina acadêmica, mas uma ciência que molda a maneira como vivemos e interagimos com o mundo ao nosso redor.', 
'https://storage.googleapis.com/blog_img/img-quim.webp', NOW(), 
(SELECT id FROM teacher WHERE name = 'Marcos Pereira'));
