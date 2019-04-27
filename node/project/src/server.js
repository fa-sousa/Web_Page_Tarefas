const porta = 3003

const express = require('express')
const app = express()

//testando requisições com postman
app.get('/tarefas', (req, res, next) => {
    res.send({id: '1', title: 'testando'})//Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})