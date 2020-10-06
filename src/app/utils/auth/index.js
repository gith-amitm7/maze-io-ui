import axios from "axios";
import { store } from "app/store";
import { appOperations } from "app/store/state/app";

export const initializeInterceptors = () => {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        store.dispatch(appOperations.logout());
      } else {
        return Promise.reject(error);
      }
    }
  );
};

export const setAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
