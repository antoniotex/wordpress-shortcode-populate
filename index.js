const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

//Bodyparser Middleware
app.use(bodyParser.json())

const db = 'mongodb://<dbuser>:<dbpassword>@ds153566.mlab.com:53566/shortcode-populate'

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Conectado'))
  .catch(erro => console.log(erro))

const port = 5000

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`)
})