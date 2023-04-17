export interface IUser {
  id?: number;
  email: string;
  password: string;
  role?: string;
}

export interface IUserState {
  data: {
    token?: string | null;
    user: IUser;
  } | null;
  isRegisterLoading?: boolean;
  isRegisterError?: null | string;
  isAuthLoading?: boolean;
  isAuthError?: null | string;
}

export enum UserActionTypes {
  USER_AUTH = "USER_AUTH",
  USER_AUTH_SUCCESS = "USER_AUTH_SUCCESS",
  USER_AUTH_ERROR = "USER_AUTH_ERROR",
  USER_REGISTER = "USER_REGISTER",
  USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS",
  USER_REGISTER_ERROR = "USER_REGISTER_ERROR",
  IS_AUTH = "IS_AUTH",
  IS_AUTH_SUCCESS = "IS_AUTH_SUCCESS",
  IS_AUTH_ERROR = "IS_AUTH_ERROR",
  USER_LOG_OUT = " USER_LOG_OUT",
}

interface UserAuthAction {
  type: UserActionTypes.USER_AUTH;
}

interface UserAuthSuccessAction {
  type: UserActionTypes.USER_AUTH_SUCCESS;
  payload: {
    token: string;
    user: IUser;
  };
}

interface UserAuthErrorAction {
  type: UserActionTypes.USER_AUTH_ERROR;
  payload: string;
}
interface UserRegisterAction {
  type: UserActionTypes.USER_REGISTER;
}

interface UserRegisterSuccessAction {
  type: UserActionTypes.USER_REGISTER_SUCCESS;
}

interface UserRegisterErrorAction {
  type: UserActionTypes.USER_REGISTER_ERROR;
  payload: string;
}

interface IsAuthAction {
  type: UserActionTypes.IS_AUTH;
}

interface IsAuthSuccessAction {
  type: UserActionTypes.IS_AUTH_SUCCESS;
  payload: IUser;
}

interface IsAuthErrorAction {
  type: UserActionTypes.IS_AUTH_ERROR;
  payload: string;
}

interface UserLogOutAction {
  type: UserActionTypes.USER_LOG_OUT;
}

export type userAction =
  | UserAuthAction
  | UserAuthSuccessAction
  | UserAuthErrorAction
  | UserRegisterAction
  | UserRegisterSuccessAction
  | UserRegisterErrorAction
  | IsAuthAction
  | IsAuthSuccessAction
  | IsAuthErrorAction
  | UserLogOutAction;
