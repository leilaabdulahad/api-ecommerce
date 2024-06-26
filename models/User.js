const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    }
})

UserSchema.methods.isValidPassword = async function (password) {
    try{
        return await bcrypt.compare(password, this.password)
    } catch (error){
        throw new Error(error)
    }
}

const User = mongoose.model('User', UserSchema)

module.exports = User