var express = require('express');
var router = express.Router();
//Variable sensor du model
var Sensor = require('../models/sensor');

// Display all Sensors.
exports.displayAll = function(req, res) {
    //Sensor query
    Sensor.find()
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

//Afficher une sensor spécifique
exports.displayOne = function(req,res)
{
	//Si l'id est déja spécifié
	if(req.body.sensorId)
	{
		//query
		Sensor.findById(req.body.sensorId)
		.then(function(sensor)
		{
			if(sensor)
			{
				res.send(sensor);
			}
			else
			{
				res.send(
				{
					message : 'No sensor with Id ' +req.body.sensorId
				});
			}
		})
		.catch(function(error)
		{
			res.send(
			{
				message : 'Error during findId' + req.body.sensorId
			});
		})
	}
	//si il y a des paramètres dans body
	else if(req.body)
	{
		var paramsSensor = {
			creationDate : req.body.creationDate,
			location : req.body.location,
			userID : req.body.userID,
		}
		//Recherche par champ
		Sensor.find(paramsSensor)
		.then(function(sensor)
		{
			if(sensor)
			{
				res.send(sensor);
			}
			else
			{
				res.send(
				{
					message : 'Not found with such parameters' + paramsSensor
				});
			}
		})
		.catch(function(error)
		{
			if(error.kind == 'ObjectId')
			{
				res.send(
				{
					message : 'Not found with such parameters' + paramsSensor
				});
			}
			else
			{
				res.send(
				{
					message : 'Error during find function with parameters' + paramsSensor
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
	if(!req.body.creationDate)
	{
		res.send(
		{
			message : 'creationDate field is empty'
		});
	}
	else if(!req.body.location)
	{
		res.send(
		{
			message : 'location field is empty'
		});
	}
	else if(!req.body.userID)
	{
		res.send(
		{
			message : 'userID field is empty'
		});
	}
	else
	{
		//On initialise la mesure à créer à partir des champs
		var sensor_created = new Sensor(
		{
			creationDate : req.body.creationDate,
			location : req.body.location,
			userID : req.body.userID,

		}); 
		sensor_created.save()
		.then(function(data)
		{
			res.send(
			{
				message : 'Added new sensor' + data
			});
		})
		.catch(function(error)
		{
			res.send(
			{
				message : 'Error during adding new sensor' + sensor_created
			});
		});
	}
};
//CRUD : UPDATE
exports.update = function(req,res)
{
	if(req.body.sensorId)
	{
		Sensor.findById(req.body.sensorId)
		.then(function(sensor)
		{
			if(sensor)
			{
				Sensor.findByIdAndUpdate(
					req.body.sensorId,
					{$set: {
						creationDate : req.body.creationDate,
						location : req.body.location,
						userID : req.body.userID,
					}},
					{ new: true }
					)
				.then(function(new_sensor)
				{
					if(new_sensor)
					{
						res.send(new_sensor);
					}
					else
					{
						res.send(
						{
							message : 'SensorId not found' + req.body.sensorId
						});
					}
				})
				.catch(function(error)
				{
					if(erro.king == 'ObjectId')
					{
						res.send(
						{
							message : 'SensorId not found' + req.body.sensorId
						});
					}
					else
					{
						res.send(
						{
							message : 'ERROR UPDATING MEASUREID' + req.body.sensorId
						});
					}
				});
			}
			else
			{
				res.send(
				{
					messae : 'sensor Id not found ' + sensorId
				});
			}
		});
	}
	else
	{
		res.send(
		{
			message : 'sensorId is empty'
		});
	}
};
exports.delete = function(req,res)
{
	Sensor.findByIdAndRemove(req.body.sensorId)
	.then(function(sensor)
	{
		if(sensor)
		{
			res.send(
			{
				message : 'Sensor deleted with Id' + req.body.sensorId
			});
		}
		else
		{
			res.send(
			{
				message : 'Sensor not found with Id' + req.body.sensorId
			});
		}
	})
	.catch(function(error)
	{
		if(error.kind == 'ObjectId')
		{
			res.send(
			{
				message : 'Sensor not found with Id' + req.body.sensorId
			});
		}
		else
		{
			res.send(
			{
				message : 'Error while deleting sensor with Id' + req.body.sensorId
			});
		}
	});
};
exports.count = function(req,res)
{
	Sensor.count()   
	.then(function()
	{
		if (sensor_count) {
			res.send({sensor_count});
		}
		else
		{
			res.send({
				message: 'Error counting Sensor'
			});
		}
	})
	.catch(function(error)
	{
		if (error.kind === 'ObjectId') {
			res.send({
				message: 'Erreur counting Sensor'
			});
		}
		else
		{
			res.send({
				message: 'Other error counting sensor'
			}
		});
		});
};
exports.derniers = function(req, res)
{

  //Trouve et classe tous les capteurs par date de creation
    Sensor.find().sort({ creationDate: -1 })
    .then(function(sensors)
    {
    	if(sensors)
    	{
    		//On pourra sélectionner directement les 6 premiers (les plus récents)
    		res.send(sensors);
    	}
      else
      {
        res.send({
          message: 'No sensors found '
        });
      }
    })
    .catch(function(err)
    {
      res.send({
        message: 'Error last sensor'
      });
    });
  }
};