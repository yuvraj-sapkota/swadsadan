import Joi from "joi";

export const createOrderSchema = Joi.object({
  tableNumber: Joi.number().required(),
});

export const updateStatusSchema = Joi.object({
  status: Joi.string()
    .valid("pending", "confirmed", "preparing", "served", "cancelled")
    .required(),
});