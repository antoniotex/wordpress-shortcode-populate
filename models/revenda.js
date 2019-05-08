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
        required: true
    },
    url: {
        type: String,
        required: true,
        default: ''
    },
    tel: {
      type: String,
      required: true,
      default: ''
    },
    endereco: {
      type: String,
      required: true,
      default: ''
    },
    cidade: {
      type: String,
      required: true,
      default: ''
    },
    estado: {
      type: String,
      required: true,
      default: ''
    }
})

module.exports = Revenda = mongoose.model('revenda', RevendaSchema)