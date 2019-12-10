var express = require('express');
var router = express.Router();
//Variable user du model
var User = require('../models/user');

// Display all Users.
exports.displayAll = function(req, res) {
    //User query
    User.find()
    .then(function(user)
    {
    	res.send(user);
    })
    .catch(function (err)
    {
    	res.send({
    		message : 'Erreur de liste'
    	});
    });
};

//Afficher une user spécifique
exports.displayOne = function(req,res)
{
	//Si l'id est déja spécifié
	if(req.body.userId)
	{
		//query
		User.findById(req.body.userId)
		.then(function(user)
		{
			if(user)
			{
				res.send(user);
			}
			else
			{
				res.send(
				{
					message : 'No user with Id ' +req.body.userId
				});
			}
		})
		.catch(function(error)
		{
			res.send(
			{
				message : 'Error during findId' + req.body.userId
			});
		})
	}
	//si il y a des paramètres dans body
	else if(req.body)
	{
		var paramsUser = {
			location : req.body.location,
			personsInHouse : req.body.personsInHouse,
			houseSize : req.body.houseSize,
		}
		//Recherche par champ
		User.find(paramsUser)
		.then(function(user)
		{
			if(user)
			{
				res.send(user);
			}
			else
			{
				res.send(
				{
					message : 'Not found with such parameters' + paramsUser
				});
			}
		})
		.catch(function(error)
		{
			if(error.kind == 'ObjectId')
			{
				res.send(
				{
					message : 'Not found with such parameters' + paramsUser
				});
			}
			else
			{
				res.send(
				{
					message : 'Error during find function with parameters' + paramsUser
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

  console.log(req.body.location);
  console.log(req.body.personsInHouse);
  console.log(req.body.houSize);
	///Tests si champs vides
	if(!req.body.location)
	{
		res.send(
		{
			message : 'location field is empty'
		});
	}
	else if(!req.body.personsInHouse)
	{
		res.send(
		{
			message : 'personsInHouse field is empty'
		});
	}
	else if(!req.body.houseSize)
	{
		res.send(
		{
			message : 'houseSize field is empty'
		});
	}
	else
	{
		//On initialise la mesure à créer à partir des champs
		var user_created = new User(
		{
			location : req.body.location,
			personsInHouse : req.body.personsInHouse,
			houseSize : req.body.houseSize

		});
		user_created.save()
		.then((data) =>
		{
			res.send(
			{
				message : 'Added new user' + data
			});
		})
		.catch((error) =>
		{
			res.send(
			{
				message : 'Error during adding new user' + user_created
			});
		});
	}
};
//CRUD : UPDATE
exports.update = function(req,res)
{
	if(req.body.userId)
	{
		User.findById(req.body.userId)
		.then(function(user)
		{
			if(user)
			{
				User.findByIdAndUpdate(
					req.body.userId,
					{$set: {
						location : req.body.location,
						personsInHouse : req.body.personsInHouse,
						houseSize : req.body.houseSize,
					}},
					{ new: true }
					)
				.then(function(new_user)
				{
					if(new_user)
					{
						res.send(new_user);
					}
					else
					{
						res.send(
						{
							message : 'UserId not found' + req.body.userId
						});
					}
				})
				.catch(function(error)
				{
					if(erro.king == 'ObjectId')
					{
						res.send(
						{
							message : 'UserId not found' + req.body.userId
						});
					}
					else
					{
						res.send(
						{
							message : 'ERROR UPDATING MEASUREID' + req.body.userId
						});
					}
				});
			}
			else
			{
				res.send(
				{
					messae : 'user Id not found ' + userId
				});
			}
		});
	}
	else
	{
		res.send(
		{
			message : 'userId is empty'
		});
	}
};
exports.delete = function(req,res)
{
	User.findByIdAndRemove(req.body.userId)
	.then(function(user)
	{
		if(user)
		{
			res.send(
			{
				message : 'User deleted with Id' + req.body.userId
			});
		}
		else
		{
			res.send(
			{
				message : 'User not found with Id' + req.body.userId
			});
		}
	})
	.catch(function(error)
	{
		if(error.kind == 'ObjectId')
		{
			res.send(
			{
				message : 'User not found with Id' + req.body.userId
			});
		}
		else
		{
			res.send(
			{
				message : 'Error while deleting user with Id' + req.body.userId
			});
		}
	});
};
exports.count = function(req,res)
{
	User.count()
	.then(function(user_count)
	{
		if (user_count) {
			res.send({user_count});
		}
		else
		{
			res.send({
				message: 'Error counting User'
			});
		}
	})
	.catch(function(error)
	{
		if (error.kind === 'ObjectId') {
			res.send({
				message: 'Erreur counting User'
			});
		}
		else
		{
			res.send({
				message: 'Other error counting User'
			});
		}
		});
};
// List of all User ID.
exports.list_ID = function(req, res) {
    //Renvoie tous les users avec leurs champs ID
    User.find().select('_id')
    .then(function(user)
    {
    	res.send(user);
    })
    .catch(function (error)
    {
    	res.send({
    		message : 'Erreur de liste'
    	});
    });
};