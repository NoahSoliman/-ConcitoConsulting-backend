require("dotenv").config();
const jwt = require("jsonwebtoken");
const userModel = require("../models/User");

/*
 * Middleware för att kontrollera tokenen är äkta
 */
async function authenticateToken(req, res, next) {
  const token = req.cookies.token;

  console.log('token');
  // console.log(token);
  // Om token inte finns skicka 401


  if (token == null) return res.sendStatus(401);

  // Verifierar token
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.sendStatus(403);

    // console.log(payload.id)

  //   // Retunerar ett object med den första i listan med det usernamet/userEmail ?
    const userModels = await userModel.findOne({ _id: payload.id });
    // console.log(userModels)
    req.user = userModels;
    // console.log(req.user )


    next();
  });
}

module.exports = authenticateToken;
