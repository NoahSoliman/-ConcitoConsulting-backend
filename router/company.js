const express = require("express");
const Router = express.Router();
const userModel = require("../models/User");
const companyModel = require("../models/Company");
const industryModel = require("../models/industry");
const authenticateToken = require("../middleware/loggedIn");

Router.get("/company", authenticateToken, async (req, res) => {
  const alldata = await industryModel.find({});
  res.json(alldata);
});

Router.post("/company", authenticateToken, async (req, res) => {
  // console.log(req.body);

  if (req.body.SNI3Numbers) {
    let allaData = req.body;
    // console.log(allaData);

    const result = companyModel.find(allaData, (err, docs) => {
      if (docs) {
    
        // console.log(docs);
        res.send(docs);
      }
      if (err) console.log(err);
    });
  }
  //
});


module.exports = Router;

