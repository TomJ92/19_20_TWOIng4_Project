var express = require('express');
var router = express.Router();
var User = require('../controllers/User.controllers.js');

// GET Display all users

router.get('/', user.displayAll);

// GET one user

router.get('/:id', user.displayOne);

// PUT Create one user

router.put('/', user.create);

// POST Update one user

router.post('/', user.update);

// DELETE Delete one user

router.delete('/', user.delete);





module.exports = router;