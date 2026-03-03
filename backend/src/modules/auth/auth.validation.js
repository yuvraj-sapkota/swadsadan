import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  gender: Joi.string().valid("male", "female", "other").required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}); 