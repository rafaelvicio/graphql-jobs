const mongoose = require("../database");

const JobSechema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company"
  },
  description: {
    type: String
  },
  tag: {
    type: String
  },
  remote: {
    type: Boolean
  },
  salary: {
    type: String
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

const Job = mongoose.model("Job", JobSechema);
module.exports = Job;
