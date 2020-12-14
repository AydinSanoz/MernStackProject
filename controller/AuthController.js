const User = require('../model/UserModel');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.auth_register = async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	// field validation
	const validation = validationResult(req);
	if (validation.errors.length > 0) {
		return res.json(validation.errors);
	}
	// User exist check
	const userData = await User.findOne({ email });
	if (userData) {
		return res
			.status(400)
			.json({ errors: [{ message: 'User already exist' }] });
	}

	//Password hash
	const salt = await bcrypt.genSalt(10);
	const cryptPassword = await bcrypt.hash(password, salt);

	// Save user

	const user = new User({
		firstName,
		lastName,
		email,
		password: cryptPassword,
	});
	await user.save();

	// TODO:   Error handling for saving
	res.json({message: "Registered Successfully"});
};

exports.auth_login = async (req, res, next) => {
	const { firstName, lastName, email, password } = req.body;

	// field validation
	const validation = validationResult(req);
	if (validation.errors.length > 0) {
		return res.status(400).json(validation.errors);
	}
	// user exist check

	const user = await User.findOne({ email });
	if (!user) {
		return res
			.status(400)
			.json({ errors: [{ message: "User doesn't exist" }] });
	}
	// password compare
	const isPasswordMatch = await bcrypt.compare(password, user.password);
	if (!isPasswordMatch) {
		return res
			.status(400)
			.json({ errors: [{ message: "Password doesn't match" }] });
	}
	// Json Web token
	
	jwt.sign(
		{ user }, process.env.JWT_PRIVATE_KEY,{ expiresIn: 7200 },(err,token)=>{
			if(err){
				res.status(400)
				res.json({errors : [{message : "unknown error occurred"}]})
			}
			res.json({'token' : token})

		});
	
};
