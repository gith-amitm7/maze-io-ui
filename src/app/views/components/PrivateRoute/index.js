import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

/**
 * @param  {object} {props}
 * Private Route manages authentication at route level.
 * If session becomes invalid due to any reason, this component
 * ensures that a redirection is made to passed {redirectPath} or "/" (by default)
 * @returns {JSX} Private Route
 */
const PrivateRoute = React.memo(
  ({ component: Component, redirectPath, ...rest }) => {
    const isAuthenticated = useSelector(
      (state) => state.app.auth.isAuthenticated
    );

    return (
      <Route
        {...rest}
        render={(props) => {
          if (!isAuthenticated)
            return (
              <Redirect
                push
                to={{ pathname: redirectPath ? redirectPath : "/" }}
              />
            );
          return <Component {...props} />;
        }}
      />
    );
  }
);

PrivateRoute.propTypes = {
  path: PropTypes.string,
  /** The path which is has to securely accessed */
  exact: PropTypes.bool,
  /** Pattern matching */
  component: PropTypes.func,
  /** The component which has to be displayed in case of authorized access */
  redirectPath: PropTypes.string,
  /** The path to which the user will be redirected to when unauthorized  */
};

export default PrivateRoute;
