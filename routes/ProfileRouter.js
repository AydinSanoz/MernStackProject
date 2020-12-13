const express= require('express')
const router = express.Router()
const ProfileController = require('../controller/ProfileController')
const auth = require('../middlewares/authMiddleware')


router.get('/', auth, ProfileController.isValidProfile)

module.exports = router;