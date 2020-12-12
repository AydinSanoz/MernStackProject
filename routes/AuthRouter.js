const express = require("express")
const router = express.Router()
const AuthController = require("../controller/AuthController")
const {check} = require('express-validator')
const isValid =  require("../middlewares/validationCheck")

// routes for /api/auth

/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */


router.post("/register", 

[
    check("email", "Invalid email").isEmail(),
    check("password","Password should be min 6 character").isLength({min : 6})
],
AuthController.auth_register)

/**
 * @route POST /api/auth/login
 * @desc Login endpoint
 * @access Private
 */


router.post("/login", 
[
    check("email","Invalid email").isEmail(),
    check("password", "Password should be min 6 character").isLength({
        min :6
    })
],
AuthController.auth_login)

module.exports = router;