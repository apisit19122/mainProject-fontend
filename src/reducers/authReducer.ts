import {
  AuthActionTypes,
  LOGIN,
  LOGOUT,
  LoginAction,
  LogoutAction,
  AuthState,
  User,
} from "./types/auth";

// Action Creators
export function login(token: string, user: User): LoginAction {
  return {
    type: LOGIN,
    payload: { token, user },
  };
}

export function logout(): LogoutAction {
  return {
    type: LOGOUT,
  };
}

// Reducer
const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  user: null,
};

export default function reducer(state = initialState, action: AuthActionTypes) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
}
