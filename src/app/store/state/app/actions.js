import * as types from "./types";

// Loading Lesson Data Actions
export const login = (payload) => ({
  type: types.LOGIN,
  payload,
});

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginFailed = (payload) => ({
  type: types.LOGIN_FAILED,
  payload,
});

export const register = (payload) => ({
  type: types.REGISTER,
  payload,
});

export const registerSuccess = (payload) => ({
  type: types.REGISTER_SUCCESS,
  payload,
});

export const registerFailed = (payload) => ({
  type: types.REGISTER_FAILED,
  payload,
});

export const resetRegistrationFlag = () => ({
  type: types.RESET_REGISTRATION_FLAG,
});

export const logout = () => ({
  type: types.LOGOUT,
});
