const mongoose = require('mongoose');

async function connectDB () {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;