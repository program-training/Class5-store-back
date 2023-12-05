import {
  registerAdmin,
  registerUser,
  loginUser,
} from "../resolvers/userResolvers";

const usersMutation = {
  registerUser,
  registerAdmin,
  loginUser,
};

export default usersMutation;
