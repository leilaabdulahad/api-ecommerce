const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Route for creating a new product
router.post('/', productsController.createProduct);

// Route for fetching all products
router.get('/', productsController.getProducts);

// Route for fetching a single product by ID
router.get('/:id', productsController.getProductById);

// Route for updating a product by ID
router.put('/:id', productsController.updateProduct);

// Route for deleting a product by ID
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
