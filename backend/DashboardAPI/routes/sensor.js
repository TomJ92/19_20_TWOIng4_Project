var express = require('express');
var router = express.Router();
var Sensor = require('../controllers/sensor');

// GET one sensor

router.get('/', Sensor.displayOne);

// PUT Create one sensor

router.put('/', Sensor.create);

// POST Update one sensor

router.post('/', Sensor.update);

// DELETE Delete one sensor

router.delete('/:id', Sensor.delete);

module.exports = router;
