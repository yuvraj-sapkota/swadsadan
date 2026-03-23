import joi from "joi";

export const createMenuSchema = joi.object({
  hotel: joi.required(),
  name: joi.string().required(),
  description: joi.string().allow("", null),
  category: joi.required(),
  basePrice: joi.number().min(0).required(),
  status: joi.string().valid("available", "outofstock").default("available"),
  imageUrl: joi.string().allow(""),
  variantGroups: joi.array().items(
    joi.object({
      groupName: joi.string().required(),
      required: joi.boolean().default(false),
      multiSelect: joi.boolean().default(false),
      options: joi.array().items(
        joi.object({
          name: joi.string().required(),
          price: joi.number().min(0).required(),
        })
      ).default([]),
    })
  ).default([]),
});