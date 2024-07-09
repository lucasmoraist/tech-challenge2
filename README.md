# tech-challenge2

## Requisitos:

- Implementação em Node.js
- Utilização de frameworks como express ou fastify
- Banco SQL ou NOSQL
- Criação de modelo de dados para postagens
- Utilização de container Docker
- CI/CD com Github Actions
- Documentação
- Cobertura de testes

## Os seguintes endpoints REST serão implementados para a aplicação de blogging:

- GET/posts

  > Lista de Posts. Este endpoint permitirá aos alunos visualizarem uma lista de todos os posts disponíveis na página principal.

- GET/posts:id

  > Leitura de Posts. Ao acessar este endpoint com um **ID** específico de post, os alunoes poderão ler o conteúdo completo desse post.

- POST/posts **AUTH**

  > [!IMPORTANT] Criação de Posts. Permite que professores criem novas postagens. Este endpoint aceitará dados como **TÍTULO, CONTEÚDO E AUTOR** no corpo da requisição.

- PUT/posts/:id **AUTH**

  > Edição de Posts. Usado para editar uma postagem existente. Professores deverão fornecedor o **ID** do post que desejam editar e os novos dados no corpo da requisição.

- GET/posts/admin **AUTH**

  > Listagem de todas as postagens(Visão Administrativa). Este endpoint permitirá que professores vejam todas as postagens criadas, facilitando a gestão do conteúdo.

- DELETE/posts/:id **AUTH**

  > Exclusão de Posts. Permite que professores excluam uma postagem específica, usando o **ID** do post como parâmetro.

- GET/posts/search
  > Busca de Posts. Este endpoint permitirá a busca de posts por palavras-chave. Os usuários poderão passar uma query string com o termno de busca e o sistema retornará uma lista de posts que contém esse termo no **título ou conteúdo**.
