const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config()
const authorRoute = require('./routers/authors')
const blogPostRoute = require('./routers/blogPost')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', authorRoute)
app.use('/', blogPostRoute)

mongoose.connect(process.env.MONGODB_SERVER_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error during db connection'))
db.once('open', () => {
    console.log('Database successfully connected')
})

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))