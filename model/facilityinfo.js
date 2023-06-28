const { model, Schema } = require("mongoose");
const TimeBookedSchema = new Schema({
  timeslot: Number,
  isBooked: Boolean,
});
const FacilityInfoSchema = new Schema({
  fID: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  maxPeople: {
    type: Number,
  },
  //   timeBooked: {
  //     type: [TimeBookedSchema],
  //     default: [],
  //   },
  timeBooked: [
    {
      timeslot: Number,
      isBooked: Boolean,
    },
  ],
  currentPeople: [
    {
      type: String,
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
