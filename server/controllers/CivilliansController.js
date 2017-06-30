var express = require('express');
var router = express.Router();
var Civillian = require('../models/Civillian');

router.get('/', function(request, response){
	Civillian.find(function(err, civillian){
		console.log(civillian);
		response.render('civillians', {civillianArray: civillian});
	});
});