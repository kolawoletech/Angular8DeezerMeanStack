const express = require('express');
const app = express();
const artistRoute = express.Router();
const DeezerPublicApi = require('deezer-public-api');
let deezer = new DeezerPublicApi();

artistRoute.route('/search').get((req, res) => {

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

    console.log(req.body, "them bady")
  Artist.create(req.body, (error, data) => {

    if (error) {
        console.log("error")

        console.log(error)

      return next(error)
    } else {
      res.json(data)
    }
  })
});



module.exports = artistRoute;