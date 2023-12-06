import {
  registerAdmin,
  registerUser,
  loginUser,
} from "../../_users/services/usersServices";

const usersMutation = {
  registerUser,
  registerAdmin,
  loginUser,
};

export default usersMutation;
