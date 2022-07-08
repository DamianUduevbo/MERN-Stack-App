const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://damian111:6vnXunp7Qgq0Heus@merncluster0.txfxjvr.mongodb.net/MERN-RESTAURANT?retryWrites=true&w=majority')
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB