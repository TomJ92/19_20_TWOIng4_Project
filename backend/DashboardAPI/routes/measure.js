var express = require('express');
var router = express.Router();
var Measure = require('../controllers/measure');

// GET Display all measures

router.get('/', Measure.displayAll);

// GET one measure

router.get('/display', Measure.displayOne);

// PUT Create one measure

router.put('/create', Measure.create);

// POST Update one measure

router.post('/update', Measure.update);

// DELETE Delete one measure

router.delete('/delete', Measure.delete);





module.exports = router;