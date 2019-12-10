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