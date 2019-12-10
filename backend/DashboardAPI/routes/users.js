var express = require('express');
var router = express.Router();
var User = require('../controllers/user');

// GET Display all

router.get('/', User.displayAll);

// GET Number of instances

router.get('/count', User.count);

// GET List of ID

router.get('/list_id', User.list_ID);

// GET count per one country 
router.get('/count_chine',User.count_chine);
// GET count per one country 
router.get('/count_japon',User.count_japon);
// GET count per one country 
router.get('/count_phiphi',User.count_phiphi);
// GET count per one country 
router.get('/count_russie',User.count_russie);
// GET count per one country 
router.get('/count_france',User.count_france);
// GET count per one country 
router.get('/count_greece',User.count_greece);
// GET count per one country 
router.get('/count_italy',User.count_italy);

// GET Persons per country
router.get('/count_pers_chine', User.count_pers_chine);
// GET Persons per country
router.get('/count_pers_japon', User.count_pers_japon);
// GET Persons per country
router.get('/count_pers_phiphi', User.count_pers_phiphi);
// GET Persons per country
router.get('/count_pers_russie', User.count_pers_russie);
// GET Persons per country
router.get('/count_pers_france', User.count_pers_france);
// GET Persons per country
router.get('/count_pers_greece', User.count_pers_greece);
// GET Persons per country
router.get('/count_pers_italy', User.count_pers_italy);


module.exports = router;