const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const revendas = require('./routes/api/revendas')

const app = express()

//Bodyparser Middleware
app.use(bodyParser.json())

const db = 'mongodb://antonio:a12345@ds153566.mlab.com:53566/shortcode-populate'

mongoose.connect(db,{ useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB Conectado'))
  .catch(erro => console.log(erro))

app.use('/api/revendas', revendas)

const port = 5000

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`)
})