const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const dados = require('./database')

const app = express()


// Configuração do handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')



//Public
app.use(express.static(path.join(__dirname, 'public')));



// Rotas
app.get('/', (req, res) => {
    res.send('Seja bem vindo ao sistema de CallCenter')
})

app.get('/index', (req, res) => {
    res.render('index')
})

app.get('/confirmar-dados', (req, res) => {
    res.render('confirmar_dados', dados.pessoa)
})

app.get('/opcoes-atendimento', (req, res) => {
    res.render('opcoes_atendimento')
})

app.get('/medicos', (req, res) => {
    //console.log(dados.medicos)
    console.log(dados.vagas2)
    res.render('agendamentos', {
        especialidades: dados.dados.especialidades,
        medicos: dados.dados.medicos,
        vagas: dados.dados.vagas,
        vagas2: dados.vagas2
    })
})



// Subindo o servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log('Servidor rodando em: localhost:'+PORT)
})