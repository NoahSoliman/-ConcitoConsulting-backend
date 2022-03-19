const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const mongoose = require("mongoose");

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) res.send(err);
    if (user) {
      res.json({sameEmail:'You have already an account in this mail'});
    } else {
      //   console.log(req.body);
      // console.log(`This is a new user`)
      /*  Här kollar vi om båda password och repeatPassword är lika */
      /* om de lika vi hashar lösenordet  och sedan spara den i db*/
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) res.json(err);
        else {
          const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            role: "customer",
            email: req.body.email,
            password: hash,
            name: req.body.name,
            orderHistory: [],
          });
          newUser.save((err) => {
            if (err) {
              // console.log(err)
              res.json(err);
            } else {
              // console.log(newUser)
              res.json(newUser);
            }
          });
        }
      });
    }
  });
});

module.exports = router;
