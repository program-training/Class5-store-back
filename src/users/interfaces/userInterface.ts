export interface UserInterface {
  _id?: string;
  email: string;
  isAdmin?: boolean;
  password?: string;
  initialPassword?: string;
}

export interface AdminInterface {
  _id?: string;
  email: string;
  isAdmin: boolean;
  password: string;
  initialPassword?: string;
}
