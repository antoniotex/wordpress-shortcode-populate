const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create a Schema
const RevendaSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      // required: true
    },
    url: {
      type: String,
      // required: true,
    },
    tel: {
      type: String,
      default: ''
    },
    endereco: {
      type: String,
      default: ''
    },
    cidade: {
      type: String,
      default: ''
    },
    estado: {
      type: String,
      default: ''
    }
})

module.exports = Revenda = mongoose.model('revenda', RevendaSchema)