import produce from "immer";
import {
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  RESET_REGISTRATION_FLAG,
} from "./types";

const initialState = {
  auth: {
    isAuthenticated: false,
    token: undefined,
    error: false,
    errMsg: undefined,
    errors: {},
  },
  user: {
    name: undefined,
    email: undefined,
  },
  networkId: undefined,
  registrationSuccess: false,
};

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_SUCCESS: {
        const { name, token, email, networkId } = action.payload;
        draft.auth.isAuthenticated = true;
        draft.networkId = networkId;
        draft.auth.token = token;
        draft.user.name = name;
        draft.user.email = email;
        draft.auth.error = false;
        draft.auth.errMsg = undefined;
        draft.auth.errors = {};

        break;
      }
      case LOGIN_FAILED: {
        draft.auth.isAuthenticated = false;
        draft.auth.token = undefined;
        draft.user.name = undefined;
        draft.user.email = undefined;
        draft.auth.error = true;
        draft.auth.errMsg = action.payload.errorMsg;
        draft.auth.errors = action.payload.errors;
        break;
      }

      case REGISTER_SUCCESS: {
        draft.auth.error = false;
        draft.auth.errMsg = undefined;
        draft.auth.errors = {};
        draft.registrationSuccess = true;
        break;
      }
      case REGISTER_FAILED: {
        draft.auth.error = true;
        draft.auth.errMsg = action.payload.errorMsg;
        draft.auth.errors = action.payload.errors;
        draft.registrationSuccess = false;
        break;
      }

      case RESET_REGISTRATION_FLAG: {
        draft.registrationSuccess = false;
        break;
      }
      case LOGOUT: {
        draft.auth.isAuthenticated = false;
        draft.auth.token = undefined;
        draft.user.name = undefined;
        draft.user.email = undefined;
        draft.auth.error = true;
        draft.auth.errMsg = action.payload;
        draft.auth.errors = {};
        draft.registrationSuccess = false;
        break;
      }
      default:
        break;
    }
  });

export default appReducer;
