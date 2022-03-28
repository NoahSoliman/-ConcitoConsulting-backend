const mongoose = require('mongoose');

const companySchemma = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  OrganizationOrgnr : {
    type: String,
  },
  OrganizationName : {
    type: String,
  },
  OrganizationStreetName : {
    type: String,
  },
  OrganizationZIPCode : {
    type: Number,
  },
  OrganisationKommun : {
    type: String,
  },
  OrganizationCity : {
    type: String,
  },
  OrganizationRegion : {
    type: String,
  },
  OrganizationTelefon : {
    type: Number,
  },
  OrganizationWeb : {
    type: String,
  },
  OrganizationMail : {
    type: String,
  },
  OrganizationBransch : {
    type: String,
  },
  OrganizationSNI1 : {
    type: String,
  },
  SNI3Numbers : {
    type: Number,
  },
});



module.exports = mongoose.model('Company', companySchemma);
