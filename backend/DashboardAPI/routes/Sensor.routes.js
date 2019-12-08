var express = require('express');
var router = express.Router();
var Sensor = require('../controllers/Sensor.controllers.js');

// GET Display all sensors

router.get('/', sensor.displayAll);

// GET one sensor

router.get('/:id', sensor.displayOne);

// PUT Create one sensor

router.put('/', sensor.create);

// POST Update one sensor

router.post('/', sensor.update);

// DELETE Delete one sensor

router.delete('/', sensor.delete);





module.exports = router;