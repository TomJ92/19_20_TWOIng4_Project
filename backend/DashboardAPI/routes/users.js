var express = require('express');
var router = express.Router();
var User = require('../controllers/user');

// GET Display all

router.get('/', User.displayAll);

// GET Number of instances

router.get('/count', User.count);

// GET Dernières instances

router.get('/lasts', User.derniers);

// GET Number of instances per type

router.get('/count_type', User.count_type);

module.exports = router;