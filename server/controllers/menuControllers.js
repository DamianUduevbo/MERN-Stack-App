const getCategories = async (req, res) => {
    try {
        res.status(200).json({message: "Displays all categories"})
    } catch {
        res.status(500).json({message: "505: Could not get all categories"})
    }
}

const addCategory = async (req, res) => {
    try {
        res.status(200).json({message: `Add a category ${req.body}`})
    } catch {
        res.status(400).json({message: `Cannot add the category ${req.body}`})
    }
}

const updateCategory = async (req, res) => {
    try {
        res.status(200).json({message: `Update this category: ${req.params.id}`})
    } catch {
        res.status(400).json({message: `Cannot update this category: ${req.params.id}`})
    }
}

const deleteCategory = async (req, res) => {
    res.status(200).json({message: `Delete this category: ${req.params.id}`})
}

module.exports = {
    getCategories, addCategory, updateCategory, deleteCategory
}