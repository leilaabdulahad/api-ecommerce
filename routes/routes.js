const express = require('express')
const router = express.Router()
const productsRoutes = require('../routes/productRoutes')
const registerRouter = require('../controllers/register')
const authRouter = require('../controllers/authController')
const messageController = require('../controllers/messageController')
const { createOrder, getUserOrders } = require('../controllers/orderController')
const authenticate = require('../middleware/authenticate')

router.use('/products', productsRoutes)
router.post('/messages', messageController.postMessage)
router.use('/register', registerRouter)
router.use('/auth', authRouter)
router.post('/orders', authenticate, createOrder)
router.get('/orders', authenticate, getUserOrders)

module.exports = router
