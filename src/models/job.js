const mongoose = require("../database");

const JobSechema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company"
  },
  description: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  remote: {
    type: Boolean
  },
  salary: {
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

const Job = mongoose.model("Job", JobSechema);
module.exports = Job;
