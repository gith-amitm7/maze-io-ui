import React from "react";
import { Provider } from "react-redux";
import configureStore from "app/store";
import App from "App";

const store = configureStore();

function AppContainer() {
  // useEffect(() => {
  //   initializeInterceptors();
  // }, []);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppContainer;
