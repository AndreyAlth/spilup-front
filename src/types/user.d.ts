interface User {
  name: string;
  id: string;
  last_name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

type UpdateUser = Pick<User, "name" | "last_name" | "email">;

type CreateUser = Pick<User | "name" | "last_name" | "email" | "password">

type SignUp = Pick<User, "name"  | "last_name" | "email" | "password"> & {
  confirmPassword: string;
};
