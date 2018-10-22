var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
require('dotenv').config();

const T = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

/* GET home page. */
router.get('/data', function(req, res, next) {
  console.log('heyah!');
});

module.exports = router;
