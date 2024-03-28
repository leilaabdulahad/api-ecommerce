const Product = require('../models/Product')

// POST
exports.createProduct = async (req, res) => {
    try{
        const product = new Product(req.body)
        await product.save()
        res.status(201).send(product)

    } catch(error){
        res.status(500).send({ message: 'Error creating product', error: error.toString()})
    }
}

// GET
exports.getProducts = async (req, res) => {
    try{
        const products = await Product.find()
        res.send(products)
    } catch(error){
        res.status(500).send({ message: 'An error occured while fetching the products', error: error.message })
    }
}

// GET Single Product
exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.send(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).send({ message: "Error fetching product" });
    }
}

// DELETE
exports.deleteProduct = async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).send({message: `Product ${req.params.id} deleted`})
    } catch(error){
        res.status(500).send({ message: "Something went wrong when trying to delete a product"})
    }
}

// UPDATE
exports.updateProduct = async (req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(product)
    } catch(error){
        res.status(500).send({ message: "Something went wrong when trying to update the product infomation"})
    }
}