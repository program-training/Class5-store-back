interface UserInterface {
  _id: string;
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  address?: {
    city?: string;
    street?: string;
    number?: string;
  };
  cart: {
    incomplete: [];
    completed: [];
  };
}

export default UserInterface;
