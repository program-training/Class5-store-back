import Joi from "joi";
import ShippingDetailsInterface from "../../interfaces/ShippingDetailsInterface";

const shippingDetailsSchema = Joi.object<ShippingDetailsInterface>({
  address: Joi.string().required(),
  contactNumber: Joi.string().required(),
  userId: Joi.string().required(),
  orderType: Joi.string().valid("standard", "express", "pickup").required(),
});

export default shippingDetailsSchema;
