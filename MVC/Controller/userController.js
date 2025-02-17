const userModel = require("../Model/userModel");
const bcrypt = require('bcrypt');


const getAllUser = async (req, res) => {
    try {
        const allUser = await userModel.find()
        return res.status(201).json({data: allUser})
    } catch (error) {
        console.log(error)
        return res.status(500).json({Message: "An Error Occurred", error: error.Message})
    }
}



const getOneUser = async (req, res) => {
    try {
        const oneUser = await userModel.findById(req.params.id)
        if (!oneUser) {
            res.status(404).json({Message: "User Not Found"});
        }
        res.status(201).json({data: oneUser})
        return 
    } catch (error) {
        res.status(500).json({Message: "An Error Occurred", error: error.Message})
    }
}


const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // const createUser = await userModel.create({name, email, password});

        const hashPassword = await bcrypt.hash(password, 10);
        const ifUserAlreadyExist = await userModel.findOne({email})
        if (ifUserAlreadyExist) {
            return res.status(401).json({Message: "User already exist"})
        }
        const createUser = await userModel.create({
            name,
            email,
            password: hashPassword,
        });

        return res.status(201).json({Message: "User Created", data: createUser});

    } catch (error) {
        return res.status(500).json({Message: "An Error Occurred", error: error?.Message})
    }
}

module.exports = {getOneUser, getAllUser, createUser}






