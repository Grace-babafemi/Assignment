const mongoose = require("mongoose");
require("dotenv/config")
const {MONGODB_URL} = process.env


const db = async (params) => {
    try {
        await mongoose.connect
(MONGODB_URL)
console.log("Connected")
    } catch (error) {
        console.log(error), error
    }
}

module.exports = db;