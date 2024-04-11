const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

router.post('/', async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ firstName, lastName, email, password: hashedPassword })

        await user.save()

        const payload = { userId: user._id }
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' })
        
        res.status(201).json({ message: 'User registered successfully', token })
    
    } catch (err) {
        console.error('Error:', err)
        res.status(500).json({ error: err.message })
    }
})


module.exports = router