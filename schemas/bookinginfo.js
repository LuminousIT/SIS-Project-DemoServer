const Joi = require("joi");

module.exports.BookingInfoSchema = Joi.object({
  id: Joi.number(),
  fID: Joi.number().required(),
  timeBooked: Joi.number().required(),
  rfID: Joi.number().required(),
  userID: Joi.string().required(),
  //   booking: Joi.array()
});
