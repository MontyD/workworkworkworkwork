'use strict';

var express = require('express'),
    router = express.Router(),
    path = require('path'),
    passUser = require(path.join(__dirname, '..', 'middlewares', 'passUser'));

router.use('/users', require('./users.js'));

router.use('/tasks', require('./tasks.js'));

// render index or login if no user
router.get('/', passUser, function(req, res) {
  if (req.user) {
    res.render('userHome');
  } else {
    res.render('login');
  }
});

module.exports = router;