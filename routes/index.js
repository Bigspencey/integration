var express = require('express');
var router = express.Router();
var canvasSdk = require('optimizely-canvas-sdk');
var config = require('../config.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.query.signed_request != undefined){
		var userContext = canvasSdk.extractUserContext(config.app_secret, req.query.signed_request);
		var project_id = userContext.context.environment.current_project;
  		res.render('index', { name: 'Spencer' });
 	} else {
 		res.render('index', { name: 'Spencer' })
 	}
});

module.exports = router;
