var express = require('express');
var router = express.Router();
var User = require('../controllers/user.js');

// GET Display all users

router.get('/', User.displayAll);

// GET one measure

router.get('/display', User.displayOne);

// PUT Create one measure

router.put('/create', User.create);

// POST Update one measure

router.post('/update', User.update);

// DELETE Delete one measure

router.delete('/delete', User.delete);



module.exports = router;