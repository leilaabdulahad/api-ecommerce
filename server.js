require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

const app = express()

app.use(express.json())

app.use('/', routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server is running on port ' + PORT))