var express = require('express');
var router = express.Router();
var Measure = require('../controllers/measure');

// GET Display all

router.get('/', Measure.displayAll);

// GET Number of instances

router.get('/count', Measure.count);

// GET Dernières instances

router.get('/lasts', Measure.derniers);

// GET Number of instances per type

router.get('/count_type', Measure.count_type);





module.exports = router;