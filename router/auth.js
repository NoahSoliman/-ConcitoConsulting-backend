require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

// Funktion för att generera JWT-token som håller i 30 min.

function generateAccessToken(id) {
  console.log({ id });
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1800s" });
}

router.post("/auth", function (req, res) {
  //   console.log(req.headers);
//   console.log(req.cookies);

  // Sparar emailen från request i en variabel.

  let email = req.body.email;

  // Kollar om det finns användare i databasen med angiven email.
  User.findOne({ email: email }, function (err, user) {
    // Om användaren hittas
    if (user) {
      // Jämför angivna lösenord mot hashade lösenordet i databasen.
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        // Password correct
        if (result) {
          // Generar JWT-token, skicka sedan status 200, user och token.
          const token = generateAccessToken(user._id);
          res.cookie("token", token, { httpOnly: true });
          console.log("Login successful");
          res.send("Login successful")          //   console.log(token);
          //   console.log("Login successful");
        } else {
          // Om fel lösenord skicka status 400
          res.sendStatus(400);
          console.log("Login Failed");
        }
      });
    } else {
      // Om fel email skicka status 400
      res.sendStatus(400)
      console.log("Email invalid");
    }
  });
});
module.exports = router;
