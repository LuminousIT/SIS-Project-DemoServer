const { model, Schema } = require("mongoose");

const RfidSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: 0,
  },
  userID: {
    type: String,
  },
  rfID: {
    type: String,
  },
  created_on: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
});

model("Rfid", RfidSchema);

module.exports = model("Rfid", RfidSchema);
