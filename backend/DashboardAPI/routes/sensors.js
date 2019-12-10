var express = require('express');
var router = express.Router();
var Sensor = require('../controllers/sensor');

// GET Display all

router.get('/', Sensor.displayAll);

// GET Number of instances

router.get('/count', Sensor.count);

// GET Dernières instances

router.get('/lasts', Sensor.derniers);

module.exports = router;