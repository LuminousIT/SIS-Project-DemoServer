const Joi = require("joi");

module.exports.RfidSchema = Joi.object({
  userID: Joi.number(),
  rfID: Joi.number(),
});
