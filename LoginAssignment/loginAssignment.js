const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.port;
app.use(express.json());
require("dotenv/config");

mongoose
.connect("mongodb://localhost:27017/login")
.then(() => {
    console.log('Connected');
})
.catch((err) => {
    console.log("An Error Occurred!", err)
});

const loginSchema = new mongoose.Schema({
    name:String,
    Password:String,
    email:String,
});

const loginModel = mongoose.model("login", loginSchema);

app.get("/:login", async (req, res) => {
    try {
        const getAllUsers = await loginModel.find();
        res.status(200).json({status: true, getAllUsers})
    } catch (error) {
        res.status(500).json({status: true, error: error})
    }
});

app.post("/:create_login", async (req, res) => {
   try {
    const {name, Password, email} = req.body;
    const checkIfEmailExist = await loginModel.findOne({
        email,
    })
    if (checkIfEmailExist) {
        res.status(409).json({Message: "User already exist"})
    }
    const user = await loginModel.create({name, email, Password});
    res.status(201).json({status: true, user})

    const checkIfPasswordExist = await loginModel.findOne({
        Password
    })
    if (checkIfPasswordExist) {
        res.status(409).json({Message: "password is not correct"})
    }
    const userPassword = await loginModel.create({name, password, email});
    res.status(201).json({status: userP})
   } catch (error) {
    res.status(500).json({status: false, error: error.Message})
   }
})

// app.post("/:create-login", async (req, res) => {
//     try {
//         const {name, Password, email} = req.body;
//         const checkEmailExist = await loginModel.findOne({
//             email, 
//         });
//         if (checkEmailExist) {
//             res.status(409).json({Message: "Email does not exist"})
//         }

//         const checkPassword = await loginModel.findOne({
//             Password
//         })
//         if (checkPassword) {
//             res.status(409).json({Message: "Password is not correct"})
//         }

//         if (checkEmailExist && checkPassword) {
//             res.status(200).json({status: true, loginSchema })
//         } else {
//            res.status(404).json({Message: "INVALID LOGIN DETAILS"}) 
//         }

//         const loginSchema= await loginModel.create({name, email, Password});
//         res.status(500).JSON({status: true, loginSchema})
//     } catch (error) {
//         res.status(500).json({status: false, error: error.Message});
//     }
// });


app.listen(34567, () => {
    console.log("Server running on port 34567");
  });
  




















// Login Endpoint

// if the user email does not exist show this: invalid email or password
// if the user password is not correct show this: invalid email or password

// if user email exist and password is correct show the information, ex: name, email and _id
