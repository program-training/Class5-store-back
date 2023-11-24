import Joi from "joi";
import CartItemInterface from "../../interfaces/CartItemInterface";

const cartItemSchema = Joi.object<CartItemInterface>({
    id: Joi.number().required(),
    name: Joi.string().required(),
    salePrice: Joi.number().required(),
    quantity: Joi.number().required(),
    description: Joi.string().required(),
  });

export default cartItemSchema