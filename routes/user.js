'use strict';

const UserModel = require('../models/user');

/*
 * GET users listing.
 */

exports.list = function(req, res){
	res.send("respond with a resource");
};

exports.signup = function(req, res, next){
	let body = req.body;
	let user = new UserModel(body);
	user.save(function(err, result){
		if(err){ return next(err) }
		res.json(201, result);
		console.log(result);
	})	
};

