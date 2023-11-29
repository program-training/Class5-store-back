import Joi from "joi";
import UserInterface from "../../interfaces/userInterface";

const userValidation = (user: UserInterface) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.base": "user email must be a valid email",
      "any.required": "user email is required",
    }),
  });
  return schema.validate(user);
};

export default userValidation;
