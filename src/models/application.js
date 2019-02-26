const mongoose = require("../database");

const ApplicationSechema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Application = mongoose.model("Application", ApplicationSechema);
module.exports = Application;
