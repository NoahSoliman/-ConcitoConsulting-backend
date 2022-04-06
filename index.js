const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
// app.options("*", cors({ origin: 'http://localhost:3001', optionsSuccessStatus: 200 }));
const mongoose = require("mongoose");
const Stream = require('stream').Stream

app.use(
  cors({
    origin: "http://localhost:3001",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/database2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});
db.once("open", () => {
  console.log("connected to db");
});

const CompanyRouter = require("./router/company");
const RegisterRouter = require("./router/register");
const authRouter = require("./router/auth");

app.get("/", (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies);
});

app.use("/api", CompanyRouter);

app.use("/api", RegisterRouter);

app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
