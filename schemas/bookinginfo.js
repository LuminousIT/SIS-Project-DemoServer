const Joi = require("joi");

module.exports.BookingInfoSchema = Joi.object({
  facilityID: Joi.number().required(),
  timeBooked: Joi.number().required(),
  rfID: Joi.number().required(),
  userID: Joi.number().required(),
});
