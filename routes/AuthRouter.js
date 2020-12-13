const express = require("express")
const router = express.Router()
const AuthController = require("../controller/AuthController")
const {check} = require('express-validator')
const { emailPasswordValidation } = require("../middlewares/validationMiddleware")



// routes for /api/auth

/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */


router.post("/register", emailPasswordValidation, AuthController.auth_register)

/**
 * @route POST /api/auth/login
 * @desc Login endpoint
 * @access Private
 */


router.post("/login", emailPasswordValidation, AuthController.auth_login)

module.exports = router;