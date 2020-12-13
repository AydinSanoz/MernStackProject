const express = require("express")
const router = express.Router()
const AuthController = require("../controller/AuthController")
const {check} = require('express-validator')
const {emailPasswordCheck} = require("../middlewares/validationMiddleware")



// routes for /api/auth

/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */


router.post("/register", emailPasswordCheck, AuthController.auth_register)

/**
 * @route POST /api/auth/login
 * @desc Login endpoint
 * @access Private
 */


router.post("/login", emailPasswordCheck, AuthController.auth_login)

module.exports = router;