var express = require('express');
var router = express.Router();
import * as mongoose from 'mongoose';
var Measure = require('../models/Measure.models.js');

// Display list of all Measures.
exports.measure_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Measure list');
};

// Display detail page for a specific Measure.
exports.measure_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Measure detail: ' + req.params.id);
};

// Display Measure create form on GET.
exports.measure_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Measure create GET');
};

// Handle Measure create on POST.
exports.measure_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Measure create POST');
};

// Display Measure delete form on GET.
exports.measure_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Measure delete GET');
};

// Handle Measure delete on POST.
exports.measure_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Measure delete POST');
};

// Display Measure update form on GET.
exports.measure_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Measure update GET');
};

// Handle Measure update on POST.
exports.measure_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Measure update POST');
};