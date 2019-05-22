const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const dados = require('./database')

const app = express()

// Funções utilitárias
function obterEspecialidades() {
    return new Promise((resolve, reject) => {
        $.get('http://fila.hmja.com.br:3003/especialidades_agenda/15/F', function (data) {
            resolve(data);
        }, 'json');
    })
}


// Funções utilitárias


// Configuração do handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
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
    //console.log(dados.vagas2)
/*
    obterEspecialidades().then((especialidades) => {
        console.log(especialidades[0].DS_ESPECIALIDADE)
    });
*/
    res.render('agendamentos', {
        especialidades: dados.dados.especialidades,

    })
})


// Subindo o servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log('Servidor rodando em: localhost:' + PORT)
})