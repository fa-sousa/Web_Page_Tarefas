const porta = 3003

const express = require('express')
const app = express()

//testando requisições para adaptar ao projeto
app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45})//Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})