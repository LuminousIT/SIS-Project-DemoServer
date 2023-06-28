const Joi = require("joi");

module.exports.BookingInfoSchema = Joi.object({
  id: Joi.string(),
  fID: Joi.number().required(),
  timeBooked: Joi.number().required(),
  rfID: Joi.string(),
  userID: Joi.string().required(),
  userEmail: Joi.string(),
  //   booking: Joi.array()
});
