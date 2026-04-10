import Joi from "joi";

export const createOrderSchema = Joi.object({
  tableNumber: Joi.number().required(),

  user: Joi.string().optional().allow(null),

  items: Joi.array()
    .items(
      Joi.object({
        menu: Joi.string().required(),

        quantity: Joi.number().min(1).required(),

        selectedOptions: Joi.array().items(
          Joi.object({
            groupName: Joi.string().allow(null),
            optionName: Joi.string().allow(null),
            price: Joi.number().min(0).allow(null),
          })
        ),
      })
    )
    .min(1)
    .required(),
});