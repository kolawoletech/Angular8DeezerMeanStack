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
  _id: {
    type: String
  },
  id: {
    type: String
  },
  picture: {
    type: String
  },
  picture_big: {
    type: String
  },
  picture_small: {
    type: String
  },
  picture_xl: {
    type: String
  },
  picture_medium: {
    type: String
  },
  nb_fan: {
    type: Number
  },
  nb_album: {
    type: Number
  },
  radio: {
    type: Boolean
  },
  type: {
    type: String
  },
  tracklist: {
    type: String
  }
}, {
  collection: 'artists'
})

module.exports = mongoose.model('Artist', Artist)