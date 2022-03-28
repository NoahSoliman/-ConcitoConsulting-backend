const mongoose = require('mongoose');

const industrySchemma = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,

  Denomination : {
    type: String,
  },
  SNI2Digits : {
    type: String,
  },
  branch : {
    type: String,
  },
  SNI3Digits : {
    type: String,
  }
});



module.exports = mongoose.model('industry', industrySchemma);
