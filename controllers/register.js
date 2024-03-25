const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

router.post('/', async (req, res) => {
    const { username, email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ username, email, password: hashedPassword })
        await user.save()
        res.status(201).json({ message: 'User registered successfully' })
    } catch (err) {
        console.error('Error:', err)
        res.status(500).json({ error: 'Server error' })
    }
})


module.exports = router