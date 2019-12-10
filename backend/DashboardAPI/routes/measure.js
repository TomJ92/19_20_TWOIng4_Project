var express = require('express');
var router = express.Router();
var Measure = require('../controllers/measure');

// GET one measure

router.get('/', Measure.displayOne);

// PUT Create one measure

router.put('/', Measure.create);

// POST Update one measure

router.post('/', Measure.update);

// DELETE Delete one measure

router.delete('/', Measure.delete);

module.exports = router;