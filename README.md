# Backend MongoDB

Este é um projeto backend simples que se conecta a um cluster MongoDB e disponibiliza dados através de uma API REST usando Node.js e Express.

## Instalação

Clone o repositório e instale as dependências:

```
git clone [url-do-seu-repositorio]
cd [nome-do-diretorio]
npm install
```

## Execução

Para iniciar o servidor:

```
npm start
```

## Estrutura do Projeto

### `config/db.js`

Arquivo responsável pela conexão com o banco de dados MongoDB.
- Configura e estabelece a conexão com o MongoDB Atlas
- Inicializa a conexão com o banco de dados "primeiro" e a coleção "dados"
- Exporta funções para acessar o banco de dados e a coleção

### `controllers/data.js`

Contém a lógica de negócios para manipulação dos dados.
- Implementa a função `getAllData()` para buscar todos os registros da coleção

### `routes/api.js`

Define as rotas da API usando Express Router.
- Implementa uma rota GET `/results` que retorna os dados do MongoDB
- Formata os dados para conter apenas os campos `resumo` e `url`

## API

### GET `/results`

Retorna todos os registros da coleção "dados".

## TODO
- Adicionar filtro de pesquisa.