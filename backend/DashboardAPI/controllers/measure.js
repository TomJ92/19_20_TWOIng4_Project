var express = require('express');
var router = express.Router();
//Variable measure du model
var Measure = require('../models/measure');
var mongoose = require('mongoose');
var ObjectID = mongoose.Types.ObjectId;

// Display all Measures.
exports.displayAll = function(req, res) {
    //Measure query
    Measure.find()
    .then(function(measure)
    {
    	res.send(measure);
    })
    .catch(function (error)
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
		var paramsMeasure = {};
		if(req.body.type){
			paramsMeasure.type = req.body.type;
		}

		if(req.body.creationDate){
			paramsMeasure.creationDate = req.body.creationDate;
		}

		if(req.body.sensorID){
			paramsMeasure.sensorID = new ObjectID(req.body.sensorID);
		}
		if(req.body.value)
		{
			paramsMeasure.value=req.body.value;
		}
		//Recherche par champ
		Measure.find(paramsMeasure)
		.then(function(measure)
		{
			if(measure)
			{
				res.send(
					{
						message : measure
					});
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
			sensorID: new ObjectID(req.body.sensorID),
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
						sensorID: new ObjectID(req.body.sensorID),
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
				message : 'Measure deleted with Id' + req.body.measureId + measure
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
exports.count = function(req,res)
{
	Measure.count()   
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
};
exports.derniers = function(req, res)
{

  //Trouve et classe tous les capteurs par date de creation
  Measure.find().sort({ creationDate: -1 }).limit(6)
  .then(function(measures)
  {
  	if(measures)
  	{
    		//On pourra sélectionner directement les 6 premiers (les plus récents)
    		res.send(measures);
    	}
    	else
    	{
    		res.send({
    			message: 'No measures found '
    		});
    	}
    })
  .catch(function(err)
  {
  	res.send({
  		message: 'Error last sensor'
  	});
  });
};
exports.count_humidity = function(req,res)
{
	Measure.find({type : "humidity"}).countDocuments()   
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
};
exports.count_temperature = function(req,res)
{
	Measure.find({type : "temperature"}).countDocuments()   
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
};
exports.count_pollution = function(req,res)
{
	Measure.find({type : "airPollution"}).countDocuments()   
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
};
// List of all Measure ID.
exports.list_ID = function(req, res) {
    //Renvoie tous les measures avec leurs champs ID
    Measure.find().select('_id')
    .then(function(measure)
    {
    	res.send(measure);
    })
    .catch(function (error)
    {
    	res.send({
    		message : 'Erreur de liste'
    	});
    });
};
exports.humidity_january = function (req,res)
{
	Measure.find({
		type : "humidity",
		creationDate : /-01-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.humidity_february = function (req,res)
{
	Measure.find({
		type : "humidity",
		creationDate : /-02-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.humidity_march = function (req,res)
{
	Measure.find({
		type : "humidity",
		creationDate : /-03-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.humidity_april = function (req,res)
{
	Measure.find({
		type : "humidity",
		creationDate : /-04-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.humidity_may = function (req,res)
{
	Measure.find({
		type : "humidity",
		creationDate : /-05-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.humidity_june = function (req,res)
{
	Measure.find({
		type : "humidity",
		creationDate : /-06-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.temperature_january = function (req,res)
{
	Measure.find({
		type : "temperature",
		creationDate : /-01-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.temperature_february = function (req,res)
{
	Measure.find({
		type : "temperature",
		creationDate : /-02-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.temperature_march = function (req,res)
{
	Measure.find({
		type : "temperature",
		creationDate : /-03-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.temperature_april = function (req,res)
{
	Measure.find({
		type : "temperature",
		creationDate : /-04-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.temperature_may = function (req,res)
{
	Measure.find({
		type : "temperature",
		creationDate : /-05-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.temperature_june = function (req,res)
{
	Measure.find({
		type : "temperature",
		creationDate : /-06-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.pollution_january = function (req,res)
{
	Measure.find({
		type : "airPollution",
		creationDate : /-01-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.pollution_february = function (req,res)
{
	Measure.find({
		type : "airPollution",
		creationDate : /-02-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.pollution_march = function (req,res)
{
	Measure.find({
		type : "airPollution",
		creationDate : /-03-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.pollution_april = function (req,res)
{
	Measure.find({
		type : "airPollution",
		creationDate : /-04-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.pollution_may = function (req,res)
{
	Measure.find({
		type : "airPollution",
		creationDate : /-05-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}
exports.pollution_june = function (req,res)
{
	Measure.find({
		type : "airPollution",
		creationDate : /-06-/i
	}).countDocuments()
	.then(function(measure_count)
	{
		res.send({measure_count});
	})
	.catch(function(error)
	{
		res.send({
			message: 'Error counting Measure'
		});
	});
}