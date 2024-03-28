const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')

    if (!token) {
        return res.status(401).json({ message: 'Authentication required' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ email: decoded.email })

        if (!user) {
            throw new Error()
        }

        req.user = user
        next()
    } catch (error) {
        res.status(401).json({ message: 'Authentication required' })
    }
};

module.exports = authenticate