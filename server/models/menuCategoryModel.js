const mongoose = require('mongoose')

const menuCategorySchema = mongoose.Schema({
    catName: {
        type: String,
        required: true
    },
    catItems: {
        type: Array,
        required: false
    },
}, {timestamps: true})

module.exports = mongoose.model('MenuCategory', menuCategorySchema)