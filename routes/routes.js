const express = require('express');
const router = express.Router();
const productsRoutes = require('../routes/productRoutes');
const registerRouter = require('../controllers/register');
const authRouter = require('../controllers/authController');

// Import the message controller directly
const messageController = require('../controllers/messageController');

router.use('/products', productsRoutes);
router.post('/messages', messageController.postMessage); // Route for handling messages
router.use('/register', registerRouter);
router.use('/auth', authRouter);

module.exports = router;
