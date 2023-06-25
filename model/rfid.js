const { model, Schema } = require("mongoose");

const RfidSchema = new Schema({
  id: {
    type: Number,
    required: true,
    default: 0,
  },
  userID: {
    type: Number,
  },
  rfID: {
    type: Number,
  },
  created_on: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
});

model("Rfid", RfidSchema);

module.exports = model("Rfid", RfidSchema);
