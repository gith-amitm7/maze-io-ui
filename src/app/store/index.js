import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./state";
import { default as rootLogic } from "./middleware";
import { createLogicMiddleware } from "redux-logic";

export var store = null;

const INITIAL_STATE = {};

export default function configureStore() {
  //create logic middleware
  const logicMiddleware = createLogicMiddleware(rootLogic);

  //prepare middleware to ensure redux can use it.
  const composeMiddleware = compose(
    applyMiddleware(logicMiddleware),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__
      ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
      : [])
  );

  store = createStore(rootReducer, INITIAL_STATE, composeMiddleware);
  return store;
}
