const { model, Schema } = require("mongoose");

const BookingInfoSchema = new Schema({
  id: {
    type: Number,
    required: true,
    default: 0,
  },
  facilityID: {
    type: Number,
  },
  timeBooked: {
    type: Number,
  },
  checkedInDate: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
  rfID: {
    type: Number,
  },
  userID: {
    type: Number,
  },
  created_on: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
});

model("BookingInfo", BookingInfoSchema);

module.exports = model("BookingInfo", BookingInfoSchema);
