import * as types from "./types";
import * as appActions from "./actions";
import { createLogic } from "redux-logic";
import { setAuthToken } from "app/utils/auth";
import axios from "axios";
import api from "app/routes/api";

const loginLogic = createLogic({
  type: types.LOGIN,
  latest: true,
  process({ getState, action }, dispatch, done) {
    const { email, password } = action.payload;
    axios
      .post(api.LOGIN, {
        email,
        password,
      })
      .then((res) => {
        const {
          token,
          user: { email, name, networkId },
        } = res.data;
        setAuthToken(token);
        dispatch(appActions.loginSuccess({ token, name, email, networkId }));
      })
      .catch((err) => {
        console.log("Error", err.response);
        dispatch(
          appActions.loginFailed({
            errMsg: "Server error",
            errors: err.response.data,
          })
        );
      })
      .finally(() => {
        done();
      });
  },
});

const registerLogic = createLogic({
  type: types.REGISTER,
  latest: true,
  process({ getState, action }, dispatch, done) {
    const { name, email, password, password2 } = action.payload;
    axios
      .post(api.REGISTER, {
        name,
        email,
        password,
        password2,
      })
      .then((res) => {
        dispatch(appActions.registerSuccess());
        setTimeout(() => {
          dispatch(appActions.resetRegistrationFlag());
          done();
        }, 1000);
      })
      .catch((err) => {
        dispatch(
          appActions.registerFailed({
            errMsg: "Server error",
            errors: err.response.data,
          })
        );
        done();
      });
  },
});

const logoutLogic = createLogic({
  type: types.LOGOUT,
  latest: true,
  process({ getState, action }, dispatch, done) {
    setAuthToken();
    done();
  },
});

export default [loginLogic, logoutLogic, registerLogic];
