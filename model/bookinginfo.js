const { array } = require("joi");
const { model, Schema } = require("mongoose");

const BookingInfoSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  fID: {
    type: String,
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
    type: String,
  },
  userID: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  //   booking: [
  //     {
  //       fID: Number,
  //       timeBooked: Number,
  //     },
  //   ],
  created_on: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
});

model("BookingInfo", BookingInfoSchema);

module.exports = model("BookingInfo", BookingInfoSchema);
