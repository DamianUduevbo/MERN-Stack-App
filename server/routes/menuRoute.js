const express = require("express")
const router = express.Router()
const controller = require('../controllers/menuControllers')

router.route("/").get(controller.getCategories).post(controller.addCategory)
router.route("/:id").put(controller.updateCategory).delete(controller.deleteCategory)

/////

router.get("/:id", (req, res) => {
    try {
        res.send(`Menu item: ${req.params.id}`)
    } catch {
        res.status(404).json({message: `Item ${req.params.id} not found`})
    }
})

module.exports = router
