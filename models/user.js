'use strict'

const MONGOOSE = require('mongoose');

let Schema = MONGOOSE.Schema;

let UserModelSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	date_of_birth: {
		type: Date,
		required: true
	},
	verified_email: {
		type: Boolean,
		default: false
	}
});

let UserModel = MONGOOSE.model('UserModel', UserModelSchema);

module.exports = UserModel;