const {check} = require('express-validator')


const checkEmail = check("email","Please enter a valid email").isEmail()
const checkPassword = check("password", "Please Enter a password with 6 and more").isLength({
    min : 6
})

exports.emailPasswordValidation = [checkEmail, checkPassword]