var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectID = mongoose.Schema.Types.ObjectId;

var measureSchema = new Schema({
  type    : { 
  	type : 	String,
  	enum: ['humidity', 'temperature', 'airPollution',],
  	required : true,
  },
  creationDate : 
  {
  	type : String,
  	required : true,
  },
  sensorID : 
  {
  	type : ObjectID,
  	required : true,
  },
  value : 
  {
  	type : Number,
  	required : true,
  }
});
module.exports  = mongoose.model('Measure', measureSchema, 'Measure');