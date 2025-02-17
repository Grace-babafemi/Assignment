const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
name:{type:String, require:true},
password: "String",
email: {
    type:String,
    required: true,
    unique: true
},
})

module.exports = userModel = mongoose.model("userDbnew", userSchema);