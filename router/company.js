const express = require("express");
const Router = express.Router();
const userModel = require("../models/User");
const companyModel = require("../models/Company");
const industryModel = require("../models/industry");
const authenticateToken = require("../middleware/loggedIn");
const fs = require("fs");

Router.get("/company", authenticateToken, async (req, res) => {
  const alldata = await industryModel.find({});
  res.json(alldata);
});

Router.post("/company/result", authenticateToken, async (req, res) => {
  console.log("test");
  console.log(req.body);

  res.end();
});

Router.post("/company/:pageNo?/", authenticateToken, async (req, res) => {
  console.log(parseInt(req.params.pageNo));
  const PageNum = parseInt(req.params.pageNo);
  const PageSize = 25;
  // console.log(PageNum);
  // console.log(req.body.SNI3Numbers)
  if (req.body.SNI3Numbers) {
    let allData = req.body;
    // try {
    const result = await companyModel
      .find(allData)
      .skip(PageNum > 0 ? PageSize * (PageNum - 1) : 0)
      .limit(PageSize)
      .exec((err, doc) => {
        if (err) {
          return res.json(err);
        }
        // console.log(doc)
        companyModel.countDocuments(allData).exec((count_err, count) => {
          if (count_err) {
            return res.json(count_err);
          }
          // console.log(count)

          return res.json({
            total: count,
            page: PageNum,
            pageSize: doc.length,
            companies: doc,
          });
        });
      });
  }
});

module.exports = Router;
