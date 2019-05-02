/*const sequence = {
    _id:1,
    get id() { return this._id++}
}

const tarefas = {}

function salvarTarefa(tarefa) {
    if (!tarefa.id) tarefa.id = sequence.id
    tarefas[tarefa.id] = tarefa
    return tarefa
}

function getTarefa(id) {
    return tarefas[id] || {}
}

function getTarefas() {
    return Object.values(tarefas)
}

module.exports = {salvarTarefa, getTarefa, getTarefas}*/