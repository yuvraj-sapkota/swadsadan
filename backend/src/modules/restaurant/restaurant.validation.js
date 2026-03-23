import Joi from "joi";

export const createRestaurantSchema = Joi.object({
    owner:Joi.required(),
    name: Joi.string().required(),
    address: Joi.string().required(),
    contact: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
 
});