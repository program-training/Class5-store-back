interface UserInterface {
  _id?: string;
  email: string;
  isAdmin?: boolean;
  password?: string;
  initialPassword?: string;
}

export default UserInterface;
