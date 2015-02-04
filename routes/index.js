var express = require('express');
var router = express.Router();

var http = require('http');
var userInput = process.argv.slice(2);
var lat = "5464646";
var long = "646647";

/* GET que envia al index principal los datos de las ciudades en una lista de objetos city. */
router.get('/', function(req, res, next) {

/* Primer request a api openweathermap.org. */
 var request = http.get("http://api.openweathermap.org/data/2.5/group?id=3435910,3936456,3871336,5128581,6167865&units=metric", function(response){
            var data = "";
            response.on("data", function(chunk){data = data + chunk});
            response.on("end", function(){
                var parsedData = JSON.parse(data);
                console.dir(parsedData);
                var currentTemperature = parsedData.cnt;
                console.log("The current temperature at that location is "+currentTemperature+".");
            });
        })


  var cities = [
  { name: 'Buenos Aires', temperature: '29' },
  { name: 'Lima', temperature: '20' },
  { name: 'santiago', temperature: '33' }
];

  res.render('index', {title: 'Bienvenido', cities: cities });
});


module.exports = router;

