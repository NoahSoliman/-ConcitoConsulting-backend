// const express = require("express");
// const Router = express.Router();
// const userModel = require("../models/User");
// const companyModel = require("../models/Company");
// const industryModel = require("../models/industry");
// const authenticateToken = require("../middleware/loggedIn");

// Router.get("/company", authenticateToken, async (req, res) => {
//   const alldata = await industryModel.find({});
//   res.json(alldata);
// });

// Router.post("/company", authenticateToken, async (req, res) => {
//   // console.log(req.body.data);

//   // console.log(test);
//   if (req.body.data) {
//     let allaData = [];

//     await req.body.data.forEach(async (doc) => {
//       // console.log(doc);
//       let test = { SNI3Numbers: Number(doc) };
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log(test);
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log("-----------------------");
//       console.log("-----------------------");

//       const result = companyModel.find(test, (err, docs) => {
//         if (docs) {
//           // });
//           // console.log(docs);
//           allaData.push(docs);
//           console.log(allaData);        }
//         if (err) console.log(err);
//       });

//       //
//     });

//     // try {
//     //   res.send(allaData);
//     // } finally {
//     //   res.send(allaData);
//     // }

//     // console.log(result)
//     // let retur = [];
//     //   for await (const document of result) {
//     //     retur.push(document);
//     //   }
//     //   console.log(retur);
//   }
// });

// module.exports = Router;

// // res.on(alldata, function(chunk) {console.log(chunk);})
// // console.log('chunk')

// // res.on('end', function() {response.end();})

// // res.send('test');
