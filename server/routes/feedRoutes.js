const express = require('express')
const getFeed = require('../controllers/feedController.js')

const router = express.Router() // Create a new router instance

router.get('/:page', getFeed)

module.exports = router
