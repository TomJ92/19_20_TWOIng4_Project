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

router.get('/count_humidity', Measure.count_humidity);
// GET Number of instances per type

router.get('/count_temperature', Measure.count_temperature);
// GET Number of instances per type

router.get('/count_pollution', Measure.count_pollution);

// GET List of ID

router.get('/list_id', Measure.list_ID);




module.exports = router;