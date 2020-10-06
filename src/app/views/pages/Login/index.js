import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import PublicHeader from "app/views/layout/header/PublicHeader";
import { appOperations } from "app/store/state/app";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

import "./styles.scss";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.app.auth.isAuthenticated
  );

  const errors = useSelector((state) => state.app.auth.errors);

  useEffect(() => {
    if (isAuthenticated) props.history.push(`/dashboard`);
    else props.history.push(`/login`);
  }, [isAuthenticated, props.history]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    console.log("Logging In!", userData);
    dispatch(appOperations.login(userData));
  };

  return (
    <div id="maze_login_page">
      <PublicHeader />
      <div className="container">
        <div style={{ marginTop: "7rem" }} className="row">
          <div className="col s8 offset-s2 ">
            <Link to="/dashboard" className="btn-flat waves-effect">
              <div className="valign-wrapper" id="back_to_home">
                <KeyboardBackspace />
                Back to home
              </div>
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> to proceed
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={handleSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={handleEmailChange}
                  value={email}
                  error={errors.email}
                  id="email"
                  type="email"
                  required={true}
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={handlePasswordChange}
                  value={password}
                  error={errors.password}
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required={true}
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn waves-effect waves-light hoverable"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  a: PropTypes.object,
};

export default Login;
