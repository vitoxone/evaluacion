var express = require('express');
var router = express.Router();

var http = require('http');

var cities = [];

/* GET que envia al index principal los datos de las ciudades en una lista de objetos city. */
router.get('/', function(req, res, next) {

/*Request a api openweathermap.org. */
 var request = http.get("http://api.openweathermap.org/data/2.5/group?id=3435910,3936456,3871336,5128581,6167865&units=metric&lang=es", function(response){
            var data = "";
            response.on("data", function(chunk){data = data + chunk});
            response.on("end", function(){
                var parsedData = JSON.parse(data);

	for(i=0; i<parsedData.cnt; i++){
		var name = parsedData.list[i].name;
		var main = parsedData.list[i].weather[0].main;
		//se cambia la primera letra por mayuscula
		var description =(parsedData.list[i].weather[0].description).charAt(0).toUpperCase()+ (parsedData.list[i].weather[0].description).slice(1);
		var temp = parsedData.list[i].main.temp;
		var humidity = parsedData.list[i].main.humidity;
		var pressure = parsedData.list[i].main.pressure;
		var wind_speed = parsedData.list[i].wind.speed;
		var icon = parsedData.list[i].weather[0].icon;

		//Se crea un nuevo objeto city
		 var newcity = {name: name, main: main, description:description,temperature: temp, humidity:humidity,pressure:pressure,wind_speed:wind_speed,icon:icon};

		//Se actualiza city en la lista
		cities.splice(i,1,newcity);

		}//end for
            });
        })


  res.render('index', {title: 'Bienvenido', cities: cities });
});


module.exports = router;

