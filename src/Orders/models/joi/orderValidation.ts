import Joi from "joi";
import OrderFromClientInterface from "../../interfaces/OrderFromClientInterface";
import shippingDetailsSchema from "./shippingDetailsSchema";
import cartItemSchema from "./cartItemSchema";

const orderValidation = (order: OrderFromClientInterface) => {
  const schema = Joi.object({
    cartItems: Joi.array()
      .items(cartItemSchema)
      .required()
      .messages({
        "any.required": "cartItems is required",
      }),
    email: Joi.string()
      .email()
      .required()
      .messages({
        "string.base": "user email must be a valid email",
        "any.required": "user email is required",
      }),
    price: Joi.number()
      .required()
      .messages({
        "any.required": "price is required",
      }),
    shippingDetails: shippingDetailsSchema
      .required()
      .messages({
        "any.required": "shippingDetails is required",
      }),
  });

  return schema.validate(order);
};

export default orderValidation;
