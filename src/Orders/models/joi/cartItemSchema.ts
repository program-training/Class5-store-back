import Joi from "joi";
import CartItemInterface from "../../interfaces/CartItemFromClientInterface";

const cartItemSchema = Joi.object<CartItemInterface>({
    productId: Joi.number().required(),
    name: Joi.string().required(),
    salePrice: Joi.string().required(),
    quantity: Joi.number().required(),
    description: Joi.string().required(),
  });

export default cartItemSchema