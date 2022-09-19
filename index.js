//RECEITA DE BOLINHO DE CHUVA COM BANANA

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const clientes = [];

//RECUPERAR TODOS DADOS
app.get("/buscar_todos", (requisicao, resposta) => {
  resposta.json({
    dados: clientes,
    totalRegistros: clientes.length,
  });
});

app.post("/cadastrar", (requisicao, resposta) => {
  const dados = requisicao.body;
  clientes.push(dados);
  resposta.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
