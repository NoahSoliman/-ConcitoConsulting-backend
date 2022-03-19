const express = require("express");
const Router = express.Router();
const userModel = require("../models/User");
const authenticateToken = require("../middleware/loggedIn");

Router.get("/company", authenticateToken, async (req, res) => {
  const alldata = await userModel.find({});

  res.json(alldata);
});

module.exports = Router;
