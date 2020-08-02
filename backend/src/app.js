const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors()) //controle de acesso
app.use(express.json())
app.use(routes)
app.use(errors()) //tratamento de erros do celebrate

module.exports = app
