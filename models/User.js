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
    },
})

UserSchema.methods.isValidPassword = async function (password) {
    try{
        return await bcrypt.compare(password, this.password)
    } catch (error){
        throw new Error(error)
    }
}

const User = mongoose.model('User', UserSchema)

User.collection.dropIndex('username_1', (err) => {
    if(err) {
        console.log('Error in dropping index', err)
    }
})

module.exports = User