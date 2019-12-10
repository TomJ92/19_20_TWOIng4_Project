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

// GET Number of instances per type

router.get('/humidity_january', Measure.humidity_january);
// GET Number of instances per type

router.get('/humidity_february', Measure.humidity_february);
// GET Number of instances per type

router.get('/humidity_march', Measure.humidity_march);
// GET Number of instances per type

router.get('/humidity_april', Measure.humidity_april);
// GET Number of instances per type

router.get('/humidity_may', Measure.humidity_may);
// GET Number of instances per type

router.get('/humidity_june', Measure.humidity_june);
// GET Number of instances per type

router.get('/temperature_january', Measure.temperature_january);
// GET Number of instances per type

router.get('/temperature_february', Measure.temperature_february);
// GET Number of instances per type

router.get('/temperature_march', Measure.temperature_march);
// GET Number of instances per type

router.get('/temperature_april', Measure.temperature_april);
// GET Number of instances per type

router.get('/temperature_may', Measure.temperature_may);
// GET Number of instances per type

router.get('/temperature_june', Measure.temperature_june);
// GET Number of instances per type

router.get('/pollution_january', Measure.pollution_january);
// GET Number of instances per type

router.get('/pollution_february', Measure.pollution_february);
// GET Number of instances per type

router.get('/pollution_march', Measure.pollution_march);
// GET Number of instances per type

router.get('/pollution_april', Measure.pollution_april);
// GET Number of instances per type

router.get('/pollution_may', Measure.pollution_may);
// GET Number of instances per type

router.get('/pollution_june', Measure.pollution_june);




module.exports = router;