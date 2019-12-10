var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectID = mongoose.Schema.Types.ObjectId;

var userSchema = new Schema({
  location : 
  {
  	type : String,
  	required : true,
  },
  personsInHouse : 
  {
  	type : Number,
  	min : 0,
  	required : true,
  },
  houseSize : { 
  	type : 	String,
  	enum: ['small', 'medium', 'big',],
  	required : true,
  },
});
module.exports  = mongoose.model('User', userSchema, 'User');