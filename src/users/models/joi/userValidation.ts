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
    password: Joi.string().allow(),
  });
  return schema.validate(user);
};

export default userValidation;
