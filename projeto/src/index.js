  const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// arrow (=>) function ou callback
 
app.get('/salvar', (request, response) => {
  response.send(`Example app listening on port ${port}`)
});

app.post('/', function (request, response) {
  let dados = request.body.dados
  response.send(`oi ${dados.nome}`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
