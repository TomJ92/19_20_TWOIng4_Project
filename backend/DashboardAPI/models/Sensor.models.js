var mongoose = require('mongoose')
   , Schema = mongoose.Schema
  , ObjectID = mongoose.Schema.Types.ObjectId;

var sensorSchema = Schema({
  sensorID : Number,
  creationDate : String,
  userID : Number,
  location : { 
  	type : 	String,
  	enum: ['kitchen', 'livingRoom', 'bedroom','bathroom','entrance'],
  },
});
var Sensor  = mongoose.model('Sensor', sensorSchema);