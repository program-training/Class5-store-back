import Joi from "joi";
import UserInterface from "../../interfaces/userInterface";

const userValidation = (user: UserInterface) => {
  const schema = Joi.object({
    _id: Joi.string().allow(""),
    email: Joi.string()
      .ruleset.pattern(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      )
      .rule({ message: 'user "mail" mast be a valid mail' })
      .required(),
    isAdmin: Joi.bool().allow(),
    password: Joi.string()
      .ruleset.pattern(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*]{1}).{8,20})/
      )
      .rule({
        message:
          'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
      })
      .allow(),
  });
  return schema.validate(user);
};

export default userValidation;
