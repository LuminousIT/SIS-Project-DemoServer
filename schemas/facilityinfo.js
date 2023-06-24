const Joi = require("joi");

module.exports.FacilityInfoSchema = Joi.object({
  name: Joi.string().required(),
  maxPeople: Joi.number().required(),
  timeBooked: Joi.array().items(
    Joi.object().pattern(Joi.string().allow(""), Joi.string().allow(""))
  ),
  currentPeople: Joi.array().items(
    Joi.object().pattern(Joi.string().allow(""), Joi.string().allow(""))
  ),
});
