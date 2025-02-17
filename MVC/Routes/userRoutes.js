const express = require("express");
const { getAllUser, getOneUser } = require("../Controller/userController");

const routes = express.Router();
routes.get("/users", getAllUser);
routes.get("/getOne/:id", getOneUser)
module.exports = routes