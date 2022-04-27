const mongoose = require('mongoose');

const testSchemma = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,

  OrganizationOrgnr: {
    type: Number,
  },
  OrganizationName: {
    type: String,
  },
 
});



module.exports = mongoose.model('Test', testSchemma);
