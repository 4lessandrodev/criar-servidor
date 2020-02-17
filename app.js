const express = require('express');
const app = express();
const port = 3000;
const hostname = 'localhost';
const backlog =() => console.log(`Servidor rodando na porta ${port}`);
//Configurando a rota inicial para enviar resposta 
app.get('/', (req, res) => {
  res.send(`Servidor rodando! Porta ${port}`)
});

//Inicializar servidor
app.listen(port, hostname, backlog());