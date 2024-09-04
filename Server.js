const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'Alice', email: 'alice@gmail.com', senha: 'teste1@123' },
  { id: 2, name: 'Bob', email: 'bob@gmail.com', senha: 'teste2@123' },
  { id: 3, name: 'Carol', email: 'carol@gmail.com', senha: 'teste3@123' },
  { id: 4, name: 'David', email: 'david@gmail.com', senha: 'teste4@123' },
  { id: 5, name: 'Eve', email: 'eve@gmail.com', senha: 'teste5@123' }
];

const docs = [
  { id: 1, id_user: 1, tipo: 'Trabalho', titulo: 'Atividade Prática 1', curso: 'AMS', turno: 'Manhã' },
  { id: 2, id_user: 2, tipo: 'Trabalho', titulo: 'Atividade Prática 2', curso: 'AMS', turno: 'Manhã' },
  { id: 3, id_user: 3, tipo: 'Projeto', titulo: 'Projeto Final', curso: 'ADS', turno: 'Noite' },
  { id: 4, id_user: 4, tipo: 'Relatório', titulo: 'Relatório de Pesquisa', curso: 'ADS', turno: 'Tarde' },
  { id: 5, id_user: 5, tipo: 'Artigo', titulo: 'Artigo Científico', curso: 'AMS', turno: 'Manhã' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/docs', (req, res) => {
  res.json(docs);
});

app.use((req, res) => {
  res.status(404).send('Erro 404: Rota não encontrada');
});

const PORT = 3300;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
