const express = require('express')
const router = express.Router()
const productsRoutes = require('../routes/productRoutes')
const registerRouter = require('../controllers/register')
const authRouter = require('../controllers/authController')
const messageController = require('../controllers/messageController')

router.use('/products', productsRoutes)
router.post('/messages', messageController.postMessage)
router.use('/register', registerRouter)
router.use('/auth', authRouter)

module.exports = router
