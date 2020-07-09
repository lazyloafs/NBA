const path = require('path');
const router = require('express').Router();
const games = require('../models/Games.js')
router.get('/test', (req, res) => {
//  res.sendFile(path.join(__dirname, '../public/index.html'));
  games.all(function(data) {
      let hbsObject = {
        games: data
      }
      console.log(hbsObject)
      res.render('index', hbsObject)
  })
});

// Place this route below all others to send he index.html file
// to any request that is not explicitly defined above
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
