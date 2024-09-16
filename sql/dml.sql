INSERT INTO
    "user" (username, password)
VALUES ('john_doe', 'senha123'),
    ('jane_doe', 'senha123'),
    ('emily_davis', 'senha123'),
    ('michael_brown', 'senha123'),
    ('sarah_white', 'senha123');

INSERT INTO
    teacher (name, school_subject, user_id)
VALUES (
        'John Smith',
        'Matemática',
        (
            SELECT id
            FROM "user"
            WHERE
                username = 'john_doe'
        )
    ),
    (
        'Jane Doe',
        'Física',
        (
            SELECT id
            FROM "user"
            WHERE
                username = 'jane_doe'
        )
    ),
    (
        'Emily Davis',
        'História',
        (
            SELECT id
            FROM "user"
            WHERE
                username = 'emily_davis'
        )
    ),
    (
        'Michael Brown',
        'Literatura',
        (
            SELECT id
            FROM "user"
            WHERE
                username = 'michael_brown'
        )
    ),
    (
        'Sarah White',
        'Biologia',
        (
            SELECT id
            FROM "user"
            WHERE
                username = 'sarah_white'
        )
    );
-- Inserindo dados na tabela 'post'
INSERT INTO
    post (
        title,
        content,
        urlImage,
        createdAt,
        teacher_id
    )
VALUES (
        'Introdução à Programação em Java',
        'Java é uma das linguagens de programação mais populares e amplamente utilizadas no mundo. Neste curso, os alunos aprenderão os conceitos fundamentais de programação usando Java, incluindo variáveis, estruturas de controle, loops, e funções. O curso também cobrirá orientação a objetos, um dos pilares principais da linguagem Java, com exemplos práticos de como criar classes, objetos, e métodos. Ao final do curso, os alunos estarão capacitados a criar pequenos programas e entender a lógica por trás de sistemas maiores. Este curso é ideal para iniciantes que estão começando sua jornada no mundo da programação.',
        'https://storage.cloud.google.com/devlog-projeto-postech/image-01.jpg',
        NOW(),
        (
            SELECT id
            FROM teacher
            WHERE
                name = 'John Smith'
        )
    );

INSERT INTO
    post (
        title,
        content,
        urlImage,
        createdAt,
        teacher_id
    )
VALUES (
        'Desenvolvimento Web com HTML, CSS e JavaScript',
        'Se você já navegou pela internet, com certeza já interagiu com HTML, CSS e JavaScript, as três tecnologias básicas do desenvolvimento web. Neste curso, vamos ensinar como criar páginas web interativas e responsivas, começando do básico até chegar em conceitos mais avançados. Vamos aprender como o HTML estrutura o conteúdo de uma página, como o CSS estiliza esse conteúdo, e como o JavaScript adiciona interatividade, como animações e validação de formulários. Ao final do curso, os alunos serão capazes de criar seu próprio site do zero, aplicando as melhores práticas de desenvolvimento web.',
        'https://storage.cloud.google.com/devlog-projeto-postech/image-02.jpg',
        NOW(),
        (
            SELECT id
            FROM teacher
            WHERE
                name = 'Jane Doe'
        )
    );

INSERT INTO
    post (
        title,
        content,
        urlImage,
        createdAt,
        teacher_id
    )
VALUES (
        'Programação com Python: Fundamentos',
        'Python é uma linguagem de programação poderosa e fácil de aprender, usada em diversas áreas, como desenvolvimento web, automação, análise de dados e inteligência artificial. Neste curso, abordaremos os conceitos fundamentais de Python, desde a instalação do ambiente até a criação de scripts simples. O curso cobrirá variáveis, estruturas de controle, listas, dicionários, e funções. Também exploraremos como trabalhar com arquivos e manipulação de dados. Este curso é ideal para aqueles que estão começando no mundo da programação ou desejam adicionar Python às suas habilidades.',
        'https://storage.cloud.google.com/devlog-projeto-postech/image-03.png',
        NOW(),
        (
            SELECT id
            FROM teacher
            WHERE
                name = 'Emily Davis'
        )
    );

INSERT INTO
    post (
        title,
        content,
        urlImage,
        createdAt,
        teacher_id
    )
VALUES (
        'Programação Orientada a Objetos com C++',
        'A programação orientada a objetos (POO) é um paradigma que organiza o código em torno de objetos e classes. Neste curso, os alunos aprenderão os principais conceitos de POO utilizando a linguagem C++. Vamos explorar a criação de classes, herança, polimorfismo e encapsulamento, além de entender como essas ferramentas podem ser usadas para criar software robusto e reutilizável. O curso inclui exercícios práticos e exemplos reais para que os alunos possam implementar o que aprenderam. Este curso é ideal para quem já tem noções básicas de programação e deseja avançar para conceitos mais complexos.',
        'https://storage.cloud.google.com/devlog-projeto-postech/image-04.png',
        NOW(),
        (
            SELECT id
            FROM teacher
            WHERE
                name = 'Michael Brown'
        )
    );

INSERT INTO
    post (
        title,
        content,
        urlImage,
        createdAt,
        teacher_id
    )
VALUES (
        'Desenvolvimento de Aplicativos Mobile com Flutter',
        'Flutter é um framework de código aberto criado pelo Google, usado para desenvolver aplicativos para Android, iOS e web a partir de uma única base de código. Neste curso, os alunos aprenderão a criar interfaces de usuário responsivas e modernas utilizando Dart, a linguagem por trás do Flutter. O curso cobrirá desde os conceitos básicos de widgets até a integração com APIs e bancos de dados. Ao final do curso, os alunos estarão preparados para criar seus próprios aplicativos móveis, prontos para serem lançados nas lojas de aplicativos.',
        'https://storage.cloud.google.com/devlog-projeto-postech/image-01.png',
        NOW(),
        (
            SELECT id
            FROM teacher
            WHERE
                name = 'Sarah White'
        )
    );

INSERT INTO
    post (
        title,
        content,
        urlImage,
        createdAt,
        teacher_id
    )
VALUES (
        'Desenvolvimento Backend com Node.js',
        'Node.js é uma plataforma de desenvolvimento backend que permite executar código JavaScript no lado do servidor. Neste curso, os alunos aprenderão a criar servidores web escaláveis e eficientes utilizando o Node.js. Vamos abordar tópicos como manipulação de rotas, requisições HTTP, middleware, e integração com bancos de dados como MongoDB. O curso também ensinará como utilizar pacotes do NPM para estender as funcionalidades do servidor. Ao final, os alunos serão capazes de criar uma API completa, pronta para ser usada em aplicações web modernas.',
        'https://storage.cloud.google.com/devlog-projeto-postech/image-02.jpg',
        NOW(),
        (
            SELECT id
            FROM teacher
            WHERE
                name = 'John Smith'
        )
    );

INSERT INTO
    post (
        title,
        content,
        urlImage,
        createdAt,
        teacher_id
    )
VALUES (
        'JavaScript Avançado: Promises, Async e Await',
        'JavaScript é a linguagem principal para desenvolvimento web, mas muitos desenvolvedores encontram desafios ao lidar com tarefas assíncronas. Neste curso, vamos explorar o conceito de Promises em JavaScript e como elas podem ajudar a gerenciar código assíncrono. Também abordaremos as palavras-chave `async` e `await`, que tornam o código assíncrono mais fácil de ler e escrever. Além disso, veremos como utilizar APIs modernas e manipular dados de maneira eficiente utilizando JavaScript. Este curso é ideal para desenvolvedores que já têm conhecimento básico da linguagem e querem avançar em suas habilidades.',
        'https://storage.cloud.google.com/devlog-projeto-postech/image-03.jpg',
        NOW(),
        (
            SELECT id
            FROM teacher
            WHERE
                name = 'Jane Doe'
        )
    );

INSERT INTO
    post (
        title,
        content,
        urlImage,
        createdAt,
        teacher_id
    )
VALUES (
        'Introdução à Data Science com Python',
        'A ciência de dados (Data Science) é uma área em rápido crescimento, e Python é a linguagem preferida para muitas das ferramentas usadas nesse campo. Neste curso, os alunos aprenderão a usar bibliotecas como NumPy, pandas e Matplotlib para analisar e visualizar dados. O curso inclui exemplos práticos de como manipular grandes conjuntos de dados e gerar gráficos para interpretar as informações. Ao final do curso, os alunos estarão prontos para iniciar projetos de ciência de dados, seja no ambiente acadêmico ou no mercado de trabalho.',
        'https://storage.cloud.google.com/devlog-projeto-postech/image-04.png',
        NOW(),
        (
            SELECT id
            FROM teacher
            WHERE
                name = 'Emily Davis'
        )
    );

INSERT INTO
    post (
        title,
        content,
        urlImage,
        createdAt,
        teacher_id
    )
VALUES (
        'Inteligência Artificial com Python: Fundamentos',
        'A inteligência artificial (IA) está revolucionando muitas indústrias, e Python é uma das principais linguagens usadas para o desenvolvimento de algoritmos de IA. Neste curso, vamos cobrir os fundamentos da IA, incluindo machine learning, redes neurais e processamento de linguagem natural. Utilizando bibliotecas como TensorFlow e Keras, os alunos aprenderão a criar e treinar seus próprios modelos de IA. Este curso é ideal para desenvolvedores que desejam se especializar nessa área e aprender como aplicar IA em projetos reais, desde reconhecimento de padrões até automação de tarefas.',
        'https://storage.cloud.google.com/devlog-projeto-postech/image-01.png',
        NOW(),
        (
            SELECT id
            FROM teacher
            WHERE
                name = 'Michael Brown'
        )
    );

INSERT INTO
    post (
        title,
        content,
        urlImage,
        createdAt,
        teacher_id
    )
VALUES (
        'DevOps: Integração e Entrega Contínua',
        'O DevOps é um conjunto de práticas que visa integrar desenvolvimento e operações para automatizar a entrega de software. Neste curso, os alunos aprenderão como implementar pipelines de integração e entrega contínua (CI/CD), utilizando ferramentas como Docker, Kubernetes e Jenkins. O curso cobrirá desde a criação de containers até o deployment automatizado de aplicações em ambientes de produção. Ao final, os alunos serão capazes de configurar e gerenciar seus próprios ambientes DevOps, garantindo entregas rápidas e confiáveis.',
        'https://storage.cloud.google.com/devlog-projeto-postech/image-02.png',
        NOW(),
        (
            SELECT id
            FROM teacher
            WHERE
                name = 'Sarah White'
        )
    );