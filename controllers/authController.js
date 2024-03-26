const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user || !(await user.isValidPassword(password))) {
            return res.status(401).json({ message: "Invalid username or password" })
        }
        
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.status(200).json({ message: "Login successful", token })
    } catch (error) {
        console.error("Error logging in:", error)
        res.status(500).json({ message: "Internal server error" })
    }
})

module.exports = router
