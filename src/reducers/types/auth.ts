export const LOGIN = "auth/LOGIN";
export const LOGOUT = "auth/LOGOUT";

export interface User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: User | null;
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: {
    token: string;
    user: User;
  };
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginAction | LogoutAction;
