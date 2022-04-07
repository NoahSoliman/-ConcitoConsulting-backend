const mongoose = require('mongoose');

const industrySchemma = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,

  Denomination : {
    type: String,
  },
  SNI2Digits : {
    type: Number,
  },
  branch : {
    type: String,
  },
  SNI3Digits : {
    type: Number,
  }
});



module.exports = mongoose.model('industry', industrySchemma);
