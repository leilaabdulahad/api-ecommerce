const express = require('express')
const products = require('../controllers/productsController')
const router = express.Router()
const register = require('../controllers/register')

router.post('/register', register)

// POST route for creating a new product
router.post('/', products.createProduct)

// GET route fetching all products
router.get('/', products.getProducts)

// GET one product
router.get('/:id', products.getProductById)

// DELETE route for deleting a product by id
router.delete('/:id', products.deleteProduct)

// PUT route for updating a product by id
router.put('/:id', products.updateProduct)

module.exports = router