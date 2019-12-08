var express = require('express');
var router = express.Router();
var Sensor = require('../controllers/sensor');

// GET Display all sensors

router.get('/', Sensor.displayAll);

// GET one measure

router.get('/display', Sensor.displayOne);

// PUT Create one measure

router.put('/create', Sensor.create);

// POST Update one measure

router.post('/update', Sensor.update);

// DELETE Delete one measure

router.delete('/delete', Sensor.delete);





module.exports = router;