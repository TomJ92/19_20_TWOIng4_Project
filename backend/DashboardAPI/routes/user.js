var express = require('express');
var router = express.Router();
var User = require('../controllers/user');

// GET one user

router.get('/', User.displayOne);

// PUT Create one user

router.put('/', User.create);

// POST Update one user

router.post('/', User.update);

// DELETE Delete one user

router.delete('/:id', User.delete);

module.exports = router;
