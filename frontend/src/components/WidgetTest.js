if(user)
{
  Sensor.find({
    userID : new ObjectID(req.body.userID)
  }).remove().exec()
  .then(function(sensors_removed)
  {
    if(sensor)
    {
      Measure.find({
        sensorID : new ObjectID(req.body.sensorId)
      }).remove().exec()
      .then(function(measures_removed)
      {
        res.send(
      {
        message : 'Removed measures with sensorID' + req.body.sensorId + measures_removed
      });
      })
      .catch(function(error)
      {
        res.send(
      {
        message : 'Error removed measures with sensorID' + req.body.sensorId + measures_removed
      });
      });

    }
    res.send(
  {
    message : 'Removed sensors with userID' + req.body.userID + sensors_removed
  });
  })
  .catch(function(error)
  {
    res.send(
  {
    message : 'Error removed sensors with userID' + req.body.userID + sensors_removed
  });
  });
}
