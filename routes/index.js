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
                //console.dir(parsedData);
                var currentTemperature = parsedData.cnt;
                console.log("Número de ciudades consultadas "+currentTemperature+".");
		console.log(".........................................................");
		for(i=0; i<parsedData.cnt; i++){
		var city = parsedData.list[i].name;
		var main = parsedData.list[i].weather[0].main;
		var description = parsedData.list[i].weather[0].description;
		var temp = parsedData.list[i].main.temp;
		var humidity = parsedData.list[i].main.humidity;
		var pressure = parsedData.list[i].main.pressure;
		var wind_speed = parsedData.list[i].wind.speed;
		var icon = parsedData.list[i].weather[0].icon;

		console.log("ciudad "+city+".");
		console.log("estado "+main+".");
		console.log("description "+description+".");
		console.log("temperatura "+temp+".");
		console.log("humedad "+humidity+".");
		console.log("Presion Atmosférica "+pressure+".");
		console.log("velocidad del viento "+wind_speed+".");
		console.log("icono "+icon+".");
		console.log(".................");
		}
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

