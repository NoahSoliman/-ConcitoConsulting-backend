const mongoose = require('mongoose');

const companySchemma = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  OrganizationOrgnr : {
    type: Number,
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
    type: Number,
  },
  OrganizationEmployees : {
    type: Number,
  },
  OrganizationTurnover : {
    type: Number,
  },
  RegNumberOfDigits : {
    type: Number,
  },
  SNI2Numbers : {
    type: Number,
  },
  SNI3Numbers : {
    type: Number,
  },
  SNI4Numbers : {
    type: Number,
  },
  SNI5Numbers : {
    type: Number,
  },
  OrganizationV1W1 : {
    type: Number,
  },
  Postadress : {
    type: String,
  },
  Postnummer : {
    type: Number,
  },
  Stad : {
    type: String,
  },
  FinancialYear : {
    type: Number,
  },
  Resultat : {
    type: Number,
  },
  Moderbolag : {
    type: String,
  },
  Etablerades : {
    type: Number,
  },
  
  EBITDA : {
    type: Number,
  
  },
  Soliditet : {
    type: String,
  },
});



module.exports = mongoose.model('Company', companySchemma);
