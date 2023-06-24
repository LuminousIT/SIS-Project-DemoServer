const { model, Schema } = require("mongoose");

const FacilityInfoSchema = new Schema({
  id: {
    type: Number,
    required: true,
    default: 0,
  },
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
  },
  maxPeople: {
    type: Number,
  },
  timeBooked: [
    {
      timeslot: Boolean,
    },
  ],
  currentPeople: [
    {
      bookingId: Number,
    },
  ],
  created_on: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
});

model("FacilityInfo", FacilityInfoSchema);

module.exports = model("FacilityInfo", FacilityInfoSchema);
