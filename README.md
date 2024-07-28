# Tech Challenge 02 - Backend & Qualidade (Grupo 08)

Projeto com o desafio para o segundo módulo do curso Full Stack Development - Pós Tech

## Ambiente de Produção Disponível

Link do ambiente de produção, onde o Github actions está executando o CI e o Render está executando o CD:

[Abrir link do Projeto](https://tech-challenge2.grupo8.tech/)

```
https://tech-challenge2.grupo8.tech/
```

## Autores

Grupo 08:

    Carolina de Araujo Nogueira Tinen  RM353510
    Esdras de Souza Mendes RM356127
    Lucas de Morais Nascimento Taguchi RM355982
    Marco Antonio Valentim Machado Junior RM354344
    Thiago Lima Dyonisio RM355323

## Requisitos

    - Implementação em Node.js
    - Utilização de frameworks como express ou fastify
    - Banco SQL ou NOSQL
    - Criação de modelo de dados para postagens
    - Utilização de container Docker
    - CI/CD com Github Actions
    - Documentação
    - Cobertura de testes

## Variáveis de ambiente

Para rodar este projeto localmente, você precisará adicionar as seguintes variáveis de ambiente a um arquivo .env - como estão listadas no .env.example:

`PORT=`
`NODE_ENV=`
`POSTGRES_HOST=`
`POSTGRES_PORT=`
`POSTGRES_USER=`
`POSTGRES_PASSWORD=`
`POSTGRES_DB=`
`JWT_SECRET=`

## Para rodar o projeto localmente

Clone o projeto

```bash
  git clone https://github.com/thiagoconsult/tech-challenge2
```

Vá para o diretório do projeto

```bash
  cd tech-challenge2
```

Instale as dependências

```bash
  npm install
```

Rode o comando para subir o container do Docker com uma instância do banco de dados Postgres. O arquivo de configuração do compose.yaml busca as variáveis `POSTGRES_USER`, `POSTGRES_PASSWORD` e `POSTGRES_DB` das variáveis de ambiente (.env).

```bash
  docker compose up -d
```

Inicie o servidor

```bash
  npm run start:dev
```

## Para executar os testes

```bash
  npm test
```

## Referência Blog API REST

### Listar todos os posts do Blog:

##### Lista de Posts. Este endpoint permitirá aos alunos visualizarem uma lista de todos os posts disponíveis, na página principal do Blog

```http
  GET /posts
```

### Listar um post do Blog:

##### Leitura de um post específico do Blog. Ao acessar este endpoint com o ID específico de um post, os alunos poderão ler o conteúdo completo desse post.

```http
  GET /posts/:id
```

| Parâmetro | Tipo     | Descrição                                 |
| :-------- | :------- | :---------------------------------------- |
| `id`      | `string` | **Obrigatório**. Id do post para buscá-lo |

### Criar um novo post no Blog (necessita de **autenticação**):

##### Criação de de um novo post no Blog. Permite que apenas professores autenticados criem novas postagens. Este endpoint aceitará dados como TÍTULO, CONTEÚDO E AUTOR no corpo da requisição.

```http
  POST /posts
```

### Editar um post no Blog (necessita de **autenticação**):

##### Edição de Posts. Usado para editar uma postagem existente. Professores autenticados deverão fornecer o ID do post que desejam editar, e inserir os novos dados no corpo da requisição.

```http
  PUT /posts/:id
```

| Parâmetro | Tipo     | Descrição                                 |
| :-------- | :------- | :---------------------------------------- |
| `id`      | `string` | **Obrigatório**. Id do post para editá-lo |

### Deletar um post do Blog (necessita de **autenticação**):

##### Exclusão de um post. Permite que professores autenticados excluam uma postagem específica, passando o ID do post a ser deletado como parâmetro.

```http
  DELETE /posts/:id
```

| Parâmetro | Tipo     | Descrição                                  |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `string` | **Obrigatório**. Id do post para deletá-lo |

### Listar todos os posts na visão administrativa (necessita de **autenticação**):

##### Listagem de todas as postagens(Visão Administrativa). Este endpoint permitirá que professores autenticados vejam todas as postagens criadas, facilitando a gestão do conteúdo.

```http
  GET /posts/admin
```

### Busca por termos no Blog:

##### Busca de Posts. Este endpoint permitirá a busca de posts por palavras-chave. Os usuários poderão passar uma query string com o termo de busca e o sistema retornará uma lista de posts que contém esse termo tanto no título, quanto conteúdo.

```http
  GET /posts/search
```

## Licença de utilização

[MIT](https://choosealicense.com/licenses/mit/)
