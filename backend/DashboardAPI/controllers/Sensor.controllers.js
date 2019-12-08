var express = require('express');
var router = express.Router();
import * as mongoose from 'mongoose';
var Sensor = require('../models/Sensor.models.js');

// Display list of all Sensors.
exports.sensor_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Sensor list');
};

// Display detail page for a specific Sensor.
exports.sensor_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Sensor detail: ' + req.params.id);
};

// Display Sensor create form on GET.
exports.sensor_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Sensor create GET');
};

// Handle Sensor create on POST.
exports.sensor_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Sensor create POST');
};

// Display Sensor delete form on GET.
exports.sensor_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Sensor delete GET');
};

// Handle Sensor delete on POST.
exports.sensor_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Sensor delete POST');
};

// Display Sensor update form on GET.
exports.sensor_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Sensor update GET');
};

// Handle Sensor update on POST.
exports.sensor_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Sensor update POST');
};