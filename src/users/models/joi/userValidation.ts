import Joi from "joi";
import UserInterface from "../../interfaces/UserInterface";

const userValidation = (user: UserInterface) => {
  const schema = Joi.object({
    _id: Joi.string().allow(""),
    email: Joi.string()
      .email()
      .rule({ message: 'user "mail" mast be a valid mail' })
      .required(),
  });
  return schema.validate(user);
};

export default userValidation;
