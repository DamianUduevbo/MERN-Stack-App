const express = require("express")
const denv = require("dotenv").config()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5003

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/menu', require('./routes/menuRoute'))
app.use('/menu/9', require('./routes/menuRoute'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))