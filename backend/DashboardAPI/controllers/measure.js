var express = require('express');
var router = express.Router();
//Variable measure du model
var Measure = require('../models/measure');

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
		Measure.find(paramsMeasure)
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
					message : 'Not found with such parameters' + paramsMeasure
				});
			}
		})
		.catch(function(error)
		{
			if(error.kind == 'ObjectId')
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
	}
	else
	{
		res.send(
		{
			message : 'No parameters found'
		});
	}
};
exports.create = function(req,res)
{
	///Tests si champs vides
	if(!req.body.type)
	{
		res.send(
		{
			message : 'type field is empty'
		});
	}
	else if(!req.body.creationDate)
	{
		res.send(
		{
			message : 'creationDate field is empty'
		});
	}
	else if(!req.body.sensorID)
	{
		res.send(
		{
			message : 'sensorID field is empty'
		});
	}
	else if(!req.body.value)
	{
		res.send(
		{
			message : 'value field is empty'
		});
	}
	else
	{
		//On initialise la mesure à créer à partir des champs
		var measure_created = new Measure(
		{
			type : req.body.type,
			creationDate: req.body.creationDate,
			sensorID:req.body.sensorID,
			value:req.body.value

		}); 
		measure_created.save()
		.then(function(data)
		{
			res.send(
			{
				message : 'Added new measure' + data
			});
		})
		.catch(function(error)
		{
			res.send(
			{
				message : 'Error during adding new measure' + measure_created
			});
		});
	}
};
//CRUD : UPDATE
exports.update = function(req,res)
{
	if(req.body.measureId)
	{
		Measure.findById(req.body.measureId)
		.then(function(measure)
		{
			if(measure)
			{
				Measure.findByIdAndUpdate(
					req.body.measureId,
					{$set: {
						creationDate: req.body.creationDate,
						value: req.body.value,
						sensorID: req.body.sensorID,
						type: req.body.type
					}},
					{ new: true }
					)
				.then(function(new_measure)
				{
					if(new_measure)
					{
						res.send(new_measure);
					}
					else
					{
						res.send(
						{
							message : 'MeasureId not found' + req.body.measureId
						});
					}
				})
				.catch(function(error)
				{
					if(erro.king == 'ObjectId')
					{
						res.send(
						{
							message : 'MeasureId not found' + req.body.measureId
						});
					}
					else
					{
						res.send(
						{
							message : 'ERROR UPDATING MEASUREID' + req.body.measureId
						});
					}
				});
			}
			else
			{
				res.send(
				{
					messae : 'measure Id not found ' + measureId
				});
			}
		});
	}
	else
	{
		res.send(
		{
			message : 'measureId is empty'
		});
	}
};
exports.delete = function(req,res)
{
	Measure.findByIdAndRemove(req.body.measureId)
	.then(function(measure)
	{
		if(measure)
		{
			res.send(
			{
				message : 'Measure deleted with Id' + req.body.measureId
			});
		}
		else
		{
			res.send(
			{
				message : 'Measure not found with Id' + req.body.measureId
			});
		}
	})
	.catch(function(error)
	{
		if(error.kind == 'ObjectId')
		{
			res.send(
			{
				message : 'Measure not found with Id' + req.body.measureId
			});
		}
		else
		{
			res.send(
			{
				message : 'Error while deleting measure with Id' + req.body.measureId
			});
		}
	});
};