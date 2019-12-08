var express = require('express');
var router = express.Router();
var Measure = require('../controllers/Measure.controllers.js');

// GET Display all measures

router.get('/', measure.displayAll);

// GET one measure

router.get('/display', measure.displayOne);

// PUT Create one measure

router.put('/create', measure.create);

// POST Update one measure

router.post('/update', measure.update);

// DELETE Delete one measure

router.delete('/delete', measure.delete);





module.exports = router;