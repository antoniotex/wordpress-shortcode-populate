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

router.delete('/:id', (req, res) => {
  Revenda.findById(req.params.id)
    .then(revenda => revenda.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})

module.exports = router

module.exports = router