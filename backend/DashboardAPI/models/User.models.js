var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var userSchema = Schema({
  userID : Number,
  location : String,
  personsinHouse : 
  {
  	type : Number,
  	min : 0,
  },
  houseSize : { 
  	type : 	String,
  	enum: ['small', 'medium', 'big',]
  },
});
var User  = mongoose.model('User', userSchema);