const Joi = require("joi");

module.exports.SignUpSchema = Joi.object({
  email: Joi.string().email().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

module.exports.LogInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
