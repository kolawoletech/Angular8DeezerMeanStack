const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Artist = new Schema({
  name: {
    type: String
  },
  link: {
    type: String
  },
  id: {
    type: String
  },
  picture: {
    type: String
  },
  nb_fan: {
    type: Array
  },
  radio: {
    type: Boolean
  },
  type: {
    type: String
  }
}, {
  collection: 'artists'
})

module.exports = mongoose.model('Artist', Artist)