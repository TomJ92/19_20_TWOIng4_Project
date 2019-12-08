var express = require('express');
var router = express.Router();
import * as mongoose from 'mongoose';
//Variable measure du model
var Measure = require('../models/Measure.models.js');
var ObjectID = mongoose.Schema.Types.ObjectId

// Display all Measures.
exports.displayAll = function(req, res) {
    //Measure query
    Measure.find()
    .then(function(sensor)
    {
    	res.send(sensor);
    })
    .catch(function (err)
    {
    	res.send({
    		message : 'Erreur de liste'
    	});
    });
};

//Afficher une measure spécifique
exports.displayOne = function(req,res)
{
	//Si l'id est déja spécifié
	if(req.body.measureId)
	{
		//query
		Measure.findById(req.body.measureId)
		.then(function(measure)
		{
			if(measure)
			{
				res.send(measure);
			}
			else
			{
				res.send(
				{
					message : 'No measure with Id ' +req.body.measureId
				});
			}
		})
		.catch(function(error)
		{
			res.send(
			{
				message : 'Error during findId' + req.body.measureId
			});
		})
	}
	//si il y a des paramètres dans body
	else if(req.body)
	{
		var paramsMeasure = {
			type : req.body.type,
			creationDate : req.body.creationDate,
			sensorID : req.body.sensorID,
			value : req.body.value
		}
		//Recherche par champ
		Measure.find(paramsMeasure);
		.then(function(measure))
		{
			if(measure)
			{
				res.send(measure);
			}
			else
			{
				res.send(
				{
					message : 'Not found with such parameters' + paramsMeasure
				});
			}
		}
		.catch(function(error)
		{
			if(error.kind == 'ObjectID')
			{
				res.send(
				{
					message : 'Not found with such parameters' + paramsMeasure
				});
			}
			else
			{
				res.send(
				{
					message : 'Error during find function with parameters' + paramsMeasure
				});
			}
		});
		else
		{
			res.send(
				{
					message : 'No parameters found'
				});
		}

	}
};
exports.create = function(req,res)
{
	///Tests si champs vides
	if(!req.body.type)
	{

	}
	if(!req.body.creationDate)
	{

	}
	if(!req.body.sensorID)
	{

	}
	if(!req.body.value)
	{

	}
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