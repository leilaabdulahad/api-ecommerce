const Order = require('../models/Order')

exports.createOrder = async (req, res) => {
    const { products } = req.body

    try{
        const order = new Order({
            userId: req.user._id,
            products
        })

        await order.save()

        res.status(201).json({
            success: true,
            data: order
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
}

exports.getUserOrders = async (req, res) => {
    try{
        const orders = await Order.find({ userId: req.user._id })

        res.status(200).json({
            success: true,
            data: orders
        })
    } catch(error){
        res.status(500).json({
            success: false, 
            message: 'Server Error'
        })
    }
}