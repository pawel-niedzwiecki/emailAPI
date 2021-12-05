// Dependencies import
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const validateDomian = function (domian) {
  const re = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
  return re.test(domian);
};

// Create Schema for Lectures
const schemaEmail = new Schema({
  domian: {
    type: String,
    required: true,
    validate: [validateDomian, "Please fill a valid domian address"],
  },
  emailTo: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    validate: [validateEmail, "Please fill a valid email address"],
  },
  emailFrom: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    validate: [validateEmail, "Please fill a valid email address"],
  },
  message: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now, required: true },
  dateLastModified: { type: Date, default: Date.now, required: true },
});

// Export Schama and Create model for Lectures
module.exports = mongoose.model("email", schemaEmail);
