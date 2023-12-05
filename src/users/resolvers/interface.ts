export interface User {
  _id: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface UserRegister {
  _id?: string;
  email: string;
  isAdmin?: boolean;
  password?: string;
}

export interface UserQuery {
  user(id: string): User;
}

export interface UserRegisterMutation {
  addUser(args: UserRegister): User;
}

export interface Admin {
  _id: string;
  email: string;
  isAdmin: boolean;
}

export interface AdminRegister {
  _id?: string;
  email: string;
  isAdmin?: boolean;
  password?: string;
}

export interface AdminRegisterMutation {
  addAdmin(args: AdminRegister): Admin;
}

export interface Login {
  email: string;
  password: string;
}

export interface Token {
  token: string;
}

export interface UserLogin {
  loginUser(args: Login): Token;
}
