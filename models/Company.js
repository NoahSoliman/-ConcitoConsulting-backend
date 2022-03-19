const mongoose = require('mongoose');

const companySchemma = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  OrganizationOrgnr: {
    type: Number,
  },
  OrganizationName: {
    type: String,
  },
  OrganizationStreet: {
    type: String,
  },
  OrganizationZIP: {
    type: Number,
  },
  OrganizationCity: {
    type: String,
  },
  OrganizationTelefon: {
    type: Number,
  },
  OrganizationWeb: {
    type: String,
  },
  OrganizationMail: {
    type: String,
  },
  OrganizationBransch: {
    type: String,
  },
  OrganizationSNI1: {
    type: Number,
  },
  OrganizationTurnover: {
    type: Number,
  },
  OrganizationKommun: {
    type: String,
  },
});



module.exports = mongoose.model('Company', companySchemma);
