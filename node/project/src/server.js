const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

//testando requisições com postman
app.get('/tarefas', (req, res, next) => {
    res.send(bancoDeDados.getTarefas())
})

app.get('/tarefas/:id', (req, res, next) => {
    res.send(bancoDeDados.getTarefa(req.params.id))
})

app.post('/tarefas', (req, res, next) => {
    const tarefa = bancoDeDados.salvarTarefa({
        id: req.body.name,
        title: req.body.title,
        completed: req.body.completed,
        userId: res.body.userId
        })
    res.send(tarefa)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})