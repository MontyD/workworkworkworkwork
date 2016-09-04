'use strict';

var express = require('express'),
    router = express.Router(),
    path = require('path'),
    models = require(path.join(__dirname, '..', 'models')),
    handleError = require(path.join(__dirname, '..', 'middlewares', 'handleError'));



router.get('/', function(req, res, next) {

    var start = parseInt(req.query.start) || 0;
    var limit = parseInt(req.query.limit) || 10;

    // FETCH ALL
    models.todoLists.findAll({
        where: {
            roomId: req.room.id
        },
        order: [
            ['createdAt', 'DESC'],
        ],
        limit: limit,
        offset: start
    }).then(function(lists) {
        return res.json(lists);
    }).catch(function(err) {
        return handleError(err, next);
    });

});

router.get('/:ID', function(req, res, next) {

    models.todoLists.findById(req.params.ID).then(function(list) {
        if (req.room.id !== list.roomId) {
            var error = new Error('Unauthorised');
            error.status = 403;
            return next(error);
        }
        return res.json(list);
    }).catch(function(err) {
        return handleError(err, next);
    });

});

router.post('/', function(req, res, next) {
    var newList = {
        name: req.body.name || '',
        roomId: req.room.id
    };
    models.todoLists.create(newList).then(function(createdList) {
        return res.json(createdList);
    }).catch(function(err) {
        return handleError(err, next);
    });

});

router.put('/:ID', function(req, res, next) {
    if (isNaN(req.params.ID) || !req.body.name) {
        var error = new Error('Bad put data');
        error.status = 400;
        return next(error);
    }

    models.todoLists.findById(req.params.ID).then(function(list) {
        if (!list) {
            return next();
        } else {
            if (list.roomId !== req.room.id) {
                var error = new Error('Unauthorised');
                error.status = 403;
                return next(error);
            }
            list.update(req.body).then(function(updatedList) {
                res.io.to(req.room.name).emit('UpdatedList', {
                    list: updatedList,
                    username: req.session.username,
                    hash: req.body.hash
                });
                res.json(updatedList);
            }).catch(function(err) {
                return handleError(err, next);
            });
        }
    }).catch(function(err) {
        return handleError(err, next);
    });

});

// DELETE all completed - by room id
router.delete('/:ID', function(req, res, next) {
  if (isNaN(req.params.ID) || !req.body.name) {
      var error = new Error('Bad request');
      error.status = 400;
      return next(error);
  }

  models.todoLists.findById(req.params.ID).then(function(list) {
      if (!list) {
          return next();
      } else {
          if (list.roomId !== req.room.id) {
              var error = new Error('Unauthorised');
              error.status = 403;
              return next(error);
          }
          list.destroy().then(function() {
              res.io.to(req.room.name).emit('DeletedList', req.params.id);
              res.sendStatus(200);
          }).catch(function(err) {
              return handleError(err, next);
          });
      }
  }).catch(function(err) {
      return handleError(err, next);
  });
});



module.exports = router;