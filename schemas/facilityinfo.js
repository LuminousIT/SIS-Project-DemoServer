const Joi = require("joi");

module.exports.FacilityInfoSchema = Joi.object({
  name: Joi.string(),
  maxPeople: Joi.number(),
  timeBooked: Joi.array(),
  currentPeople: Joi.array(),
  fID: Joi.number(),
});
