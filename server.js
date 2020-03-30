// usei o express para cirar e configurar o servidor
const express = require('express');
const server = express();

const ideasdb = require('./ideasdb');
const IdeasController = require('./src/controllers/IdeasController')
const NewIdeaController = require('./src/controllers/NewIdeaController')

// configrar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"));

// habilitar uso do request.body
server.use(express.urlencoded({ extended: true }))

// configuração do nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  express: server,
  noCache: true,
});

// criação de rodas
// e capturação do pedido para responder
server.get('/', IdeasController.index);

server.get('/ideias', IdeasController.ideias);

server.post('/', NewIdeaController.create);

// servidor ligado na porta 3000
server.listen(3000);