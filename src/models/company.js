const mongoose = require("../database");

const CompanySechema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  address: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Company = mongoose.model("Company", CompanySechema);
module.exports = Company;
