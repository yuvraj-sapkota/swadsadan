import joi from "joi";

export const createCategorySchema = joi.object({
    hotel: joi.required(),
    name: joi.string().required(),
    description: joi.string(),
    image: joi.string(),
    status: joi.string().valid("active", "hidden").default("active"),
    priority: joi.number().default(1),

});