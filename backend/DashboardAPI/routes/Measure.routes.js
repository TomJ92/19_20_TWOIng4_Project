var express = require('express');
var router = express.Router();
var Measure = require('../controllers/Measure.controllers.js');

// GET Display all measures

router.get('/', measure.displayAll);

// GET one measure

router.get('/:id', measure.displayOne);

// PUT Create one measure

router.put('/', measure.create);

// POST Update one measure

router.post('/', measure.update);

// DELETE Delete one measure

router.delete('/', measure.delete);





module.exports = router;