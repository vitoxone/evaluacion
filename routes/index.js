var express = require('express');
var router = express.Router();

/* GET que envia al index principal los datos de las ciudades en una lista de objetos city. */
router.get('/', function(req, res, next) {

  var cities = [
  { name: 'Buenos Aires', temperature: '29' },
  { name: 'Lima', temperature: '20' },
  { name: 'santiago', temperature: '33' }
];

  res.render('index', {title: 'Bienvenido', cities: cities });
});


module.exports = router;
