var mongoose = require('mongoose')
   , Schema = mongoose.Schema
  , ObjectID = mongoose.Schema.Types.ObjectId;

var sensorSchema = new Schema({
  creationDate : 
  {
  	type : 	String,
  	required : true,
  },
  location : { 
  	type : 	String,
  	enum: ['kitchen', 'livingroom', 'bedroom','bathroom','entrance'],
  	required : true,
  },
  userID : 
  {
  	type : ObjectID,
  	required : true,
  },
});
module.exports  = mongoose.model('Sensor', sensorSchema, 'Sensor');