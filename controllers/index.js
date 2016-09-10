'use strict';

var express = require('express'),
    router = express.Router(),
    path = require('path'),
    respondsToJSON = require(path.join(__dirname, '..', 'middlewares', 'respondsJSON')),
    checkRoom = require(path.join(__dirname, '..', 'middlewares', 'checkRoom')),
    isAdmin = require(path.join(__dirname, '..', 'middlewares', 'isAdmin')),
    passRoomAndUser = require(path.join(__dirname, '..', 'middlewares', 'passRoomAndUser'));

router.use('/rooms', require('./rooms.js'));

router.use('/tasks', respondsToJSON, checkRoom, require('./tasks.js'));

router.use('/todo-lists', respondsToJSON, checkRoom, require('./todo-lists.js'));

// render index or login if no user
router.get(['/', '/overview'], passRoomAndUser, function(req, res) {
  if (req.room) {
    res.render('room');
  } else {
    res.render('Index');
  }
});

// render index or login if no user
router.get('/settings', checkRoom, passRoomAndUser, isAdmin,  function(req, res) {
  if (req.room) {
    res.render('room');
  } else {
    res.render('Index');
  }
});


module.exports = router;
