import Joi from "joi";
import OrderFromClientInterface from "../../interfaces/OrderFromClientInterface";
import shippingDetailsSchema from "./shippingDetailsSchema";
import cartItemSchema from "./cartItemSchema";

const orderValidation = (order: OrderFromClientInterface) => {
  const schema = Joi.object({
    cartItems: Joi.array()
      .items(cartItemSchema)
      .message("cartItems is not valid")
      .required()
      .message("cartItems is required"),
    email: Joi.string()
      .email()
      .message("user email is not valid")
      .required()
      .message("user email is required"),
    price: Joi.number().required().message("price is required"),
    shippingDetails: shippingDetailsSchema
      .keys()
      .message("shippingDetails is not valid")
      .required()
      .message("shippingDetails is required"),
  });

  return schema.validate(order);
};

export default orderValidation;
