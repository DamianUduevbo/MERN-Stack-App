const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter a name"]
    },
    email: {
        type: String,
        required: [true, "Enter an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Enter a password"]
    },
    phone: {
        type: Number,
        required: false,
        //unique: true
    }
}, {timestamps: true})

class UserModel {

}

module.exports = mongoose.model('User', userSchema)