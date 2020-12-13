const express= require('express')
const router = express.Router()
const ProfileController = require('../controller/ProfileController')
const auth = require('../middlewares/authMiddleware')


// base url: /api/profile

/**
 * @route   GET /api/profile
 * @desc    Profile endpoint
 * @access  Private
 */

router.get('/', auth, ProfileController.getProfileInfo)

router.get('/update', auth, ProfileController.updateProfileInfo)

module.exports = router;