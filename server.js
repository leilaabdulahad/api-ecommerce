require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productsRoutes = require('./routes/routes')
const registerRouter = require('./controllers/register') 

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

const app = express()

app.use(express.json())
app.use('/products', productsRoutes)
app.use('/register', registerRouter)

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server is running on port ' + PORT))