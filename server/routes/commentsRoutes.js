const express = require('express')
const getComments = require('../controllers/commentsController')

const router = express.Router() // Create a new router instance

router.get('/:briefref', getComments)

module.exports = router
