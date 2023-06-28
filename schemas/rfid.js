const Joi = require("joi");

module.exports.RfidSchema = Joi.object({
  userID: Joi.string(),
  rfID: Joi.string(),
});
