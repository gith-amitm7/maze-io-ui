import { PAGE_URLS, APP_BASE } from "app/routes/app";
import { Login, PageNotFound, Registration } from "app/views/pages";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DefaultLayout from "app/views/layout";
import "materialize-css/dist/js/materialize";
import "./app.scss";

function App() {
  return (
    <>
      <div
      // id="maze_app"
      />
      <Router>
        <Switch>
          <Route path={APP_BASE} exact={true}>
            <Redirect to={{ pathname: PAGE_URLS.LOGIN }} />
          </Route>
          <Route path={PAGE_URLS.LOGIN} exact={true} component={Login} />
          <Route
            path={PAGE_URLS.REGISTER}
            exact={true}
            component={Registration}
          ></Route>
          <Route exact={true} path={PAGE_URLS.PAGE_NOT_FOUND}>
            <PageNotFound />
          </Route>
          <Route>
            <DefaultLayout />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
