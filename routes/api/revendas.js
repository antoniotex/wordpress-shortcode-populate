const express = require('express')
const router = express.Router()

const Revenda = require('../../models/revenda')

router.post('/', (req, res) => {
  const newRevenda = new Revenda({
      name: req.body.name
  })
  newRevenda.save().then(revenda => res.json(revenda))
})

module.exports = router