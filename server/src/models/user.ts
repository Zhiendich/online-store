import { Request } from "express";
export interface IUser {
  id: number;
  email: string;
  password?: string;
  role: string;
}

export interface RequestUser extends Request {
  user: IUser;
}
