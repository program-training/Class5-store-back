import Joi from "joi";
import ordersInterface from "../../interfaces/OrderInterface";
import ProductInterface from "../../../products/interfaces/productInterface";
import shippingDetails from "../../interfaces/OrderInterface";

const userValidation = (order: ordersInterface) => {
  const schema = Joi.object({
    id: Joi.string().allow(""),
    products: Joi.array<ProductInterface>().required(),
    email: Joi.string()
      .pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
      .message('user "mail" mast be a valid mail')
      .required()
      .messages({
        "string.pattern.base": 'user "mail" mast be a valid mail',
        "string.empty": 'user "mail" is required',
      })
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-]).{9,}$/)
      .message(
        'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-'
      )
      .required()
      .messages({
        "string.pattern.base":
          'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
        "string.empty": 'user "password" is required',
      }),
    shippingDetails: Joi.object<shippingDetails>().required(),
  });

  return schema.validate(order);
};

export default userValidation;
