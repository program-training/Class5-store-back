import Joi from "joi";
import UserInterface from "../../interfaces/userInterface";

const adminValidation = (user: UserInterface) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.base": "user email must be a valid email",
      "any.required": "user email is required",
    }),
    password: Joi.string()
      .pattern(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*]{1}).{8,20})/
      )
      .required()
      .messages({
        "string.pattern.base":
          'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
      }),
    initialPassword: Joi.string().required(),
  });
  return schema.validate(user);
};

export default adminValidation;
