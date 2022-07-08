const menuItemModel = require('../models/menuItemModel')
const menuCatModel = require('../models/menuCategoryModel')

const getCategories = async (req, res) => {
    try {
        const category = await menuCatModel.find()
        res.status(200).json(category)
    } catch {
        res.status(500).json({message: "505: Could not get all categories"})
    }
}

// TODO: check for repeats
const addCategory = async (req, res) => {
    if (!req.body.catName || !req.body.catItems) {
        res.status(400)
        throw new Error(`Category name and/or category items missing`)
    }

    try {
        const newCategory = await menuCatModel.create({
            catName: req.body.catName,
            catItems: req.body.catItems,
        })

        res.status(200).json(newCategory)
    } catch {
        res.status(400).json({message: `Cannot add the category ${req.body}`})
    }
}

const updateCategory = async (req, res) => {
    const findCat = await menuCatModel.findById(req.params.id)

    if (!findCat) {
        res.status(404)
        throw new Error(`Category name and/or category items missing`)
    }

    try {
        const updatedCat = await menuCatModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedCat)
    } catch {
        res.status(400).json({message: `Cannot update this category: ${req.params.id}`})
    }
}

const deleteCategory = async (req, res) => {
    const findCat = await menuCatModel.findById(req.params.id)
    
    if (!findCat) {
        res.status(404)
        throw new Error(`Cannot update this category: ${req.params.id}`)
    }

    try {
        //const updatedCat = await menuCatModel.findByIdAndDelete(req.params.id)
        findCat.remove()
        res.status(200).json({id: req.params.id})
    } catch {
        res.status(400).json({message: `Cannot update this category: ${req.params.id}`})
    }
}

module.exports = {
    getCategories, addCategory, updateCategory, deleteCategory
}