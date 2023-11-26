import Joi from "joi";
import UserInterface from "../../interfaces/userInterface";

const userValidation = (user: UserInterface) => {
  const schema = Joi.object({
    _id: Joi.string().allow(""),
    email: Joi.string().email().required().messages({
      "string.base": "user email must be a valid email",
      "any.required": "user email is required",
    }),
    isAdmin: Joi.bool().allow(),
    password: Joi.string()
      .pattern(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*]{1}).{8,20})/
      )
      .allow()
      .messages({
        "string.pattern.base":
          'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
      }),
  });
  return schema.validate(user);
};

export default userValidation;
