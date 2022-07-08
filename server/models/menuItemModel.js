const mongoose = require('mongoose')

const menuItemSchema = mongoose.Schema({
    imageURL: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('MenuItem', menuItemSchema)