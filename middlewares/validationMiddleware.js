const { check } = require('express-validator');

const checkEmail = check('email', 'Not Valid Email').isEmail();
const checkPassword = check('password', 'Enter a password with 6 and more').isLength({
	min: 6,
});

exports.emailPasswordCheck = [checkEmail, checkPassword]
