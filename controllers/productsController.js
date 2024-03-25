const Product = require('../models/Product')

// POST
exports.createProduct = async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    res.status(201).send(product)
}

// GET
exports.getProducts = async (req, res) => {
    const products = await Product.find()
    res.send(products)
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
    await Product.findByIdAndDelete(req.params.id)
    res.status(204).send()
}

// UPDATE
exports.updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(product)
}