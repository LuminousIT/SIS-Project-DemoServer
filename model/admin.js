const { model, Schema } = require("mongoose");

const AdminSchema = new Schema({
  id: {
    type: Number,
    required: true,
    default: 0,
  },
  email: {
    type: String,
    required: [true, "Email address cannot be empty"],
    unique: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  time_stamp: {
    type: Number,
    required: true,
    default: () => Date.now(),
  },
  created_on: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
  updated_on: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
});

model("Admin", AdminSchema);

module.exports = model("Admin", AdminSchema);
