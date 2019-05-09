const express = require('express')
const router = express.Router()

const Revenda = require('../../models/revenda')

router.get('/', (req, res) => {
  Revenda.find()
    .sort({ date: -1 })
    .then(revendas => res.json(revendas))
})

router.post('/', (req, res) => {
  const newRevenda = new Revenda({
      nome: req.body.nome
  })
  newRevenda.save().then(revenda => res.json(revenda))
})

module.exports = router