const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const feedRoutes = require('./routes/feedRoutes')
const commentsRoutes = require('./routes/commentsRoutes')

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'assets')))

app.use('/feed', feedRoutes)
app.use('/comments', commentsRoutes)

app.listen(4000, () => {
  console.log(`Server is running on port ${4000}`)
})
