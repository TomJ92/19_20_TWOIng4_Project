var express = require('express');
var router = express.Router();
var User = require('../controllers/user');

// GET Display all

router.get('/', User.displayAll);

// GET Number of instances

router.get('/count', User.count);

// GET List of ID

router.get('/list_id', User.list_ID);

// GET count per one country 
router.get('/count_pays',User.count_pays)

module.exports = router;