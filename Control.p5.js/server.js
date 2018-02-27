// Using express: http://expressjs.com/
var express = require('express');
// Create the app
var app = express();

var options = { baudrate: 115200};

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0', options, function (err) {
if (err) {
  return console.log('Error: ', err.message);
}
port.write('90!', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('Servo ready');
});
});

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Whats you favourite iceceream?');
  console.log('');
}

app.get('/control/:leg/:bone/:position', doThing);

function doThing(req, res) {
  // Query String
  var leg = req.params['leg'];
  var bone = req.params['bone'];
  var position = req.params['position'] || 90;

  // Create the output
  var output = '';
  var stringy = "Moving leg " + leg +", bone " + bone  + " to " + position;
  output += stringy + '<br/>';

  var serialBuffer = position+'!'

  port.write(serialBuffer, function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
    }
    console.log(stringy);
  });
  res.send(output);
}
app.use(express.static('public'));
