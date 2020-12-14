const express = require("express")
const router = express.Router()
const AuthRouter = require("./AuthRouter")
const ProfileRouter = require("./ProfileRouter")
const BookRouter = require("./BookRouter")
 

// Only Api EndPoint /api 

/**
 * @route api/auth
 * @desc Route for auth
 * 
 */

router.use("/auth", AuthRouter)

/**
 * @route api/profile
 * @desc  Route for profile
 */

 router.use("/profile",ProfileRouter)

 /**
  * @route api/book
  * @desc Route for book
  */
router.use("/books", BookRouter)

module.exports = router;