const express = require('express');
const app = express();
const artistRoute = express.Router();
const DeezerPublicApi = require('deezer-public-api');
let deezer = new DeezerPublicApi();

artistRoute.route('/search').get((req, res) => {

    console.log("lloking ofr ", req.query.query)
    deezer.search.artist(req.query.query).then(function(result) {
     //   console.log("resulting", result);

      
        res.json(result)
          
     });
})


artistRoute.route('/artist').get((req, res) => {

    console.log("lloking ofr ", req.query.query)
    deezer.artist(req.query.query).then(function(result) {
      console.log("resulting", result);

      
        res.json(result)
          
     });
})


let Artist = require('../model/Artist');

// Add Artist
artistRoute.route('/save').post((req, res, next) => {
  Artist.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});



module.exports = artistRoute;