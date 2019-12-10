var express = require('express');
var router = express.Router();
var Sensor = require('../controllers/sensor');

// GET Display all

router.get('/', Sensor.displayAll);

// GET Number of instances

router.get('/count', Sensor.count);

// GET Dernières instances

router.get('/lasts', Sensor.derniers);

// GET List of ID

router.get('/list_id', Sensor.list_ID);

module.exports = router;

// GET Number of instances per type

router.get('/count_kitchen', Sensor.count_kitchen);
// GET Number of instances per type

router.get('/count_livingroom', Sensor.count_livingroom);
// GET Number of instances per type

router.get('/count_bedroom', Sensor.count_bedroom);
// GET Number of instances per type

router.get('/count_bathroom', Sensor.count_bathroom);
// GET Number of instances per type

router.get('/count_entrance', Sensor.count_entrance);