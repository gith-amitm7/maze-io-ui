import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import PublicHeader from "app/views/layout/header/PublicHeader";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { appOperations } from "app/store/state/app";
import "./styles.scss";

function Registration(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const registrationSuccess = useSelector(
    (state) => state.app.registrationSuccess
  );
  const dispatch = useDispatch();

  const registrationInfo = useSelector((state) => {
    return {
      isAuthenticated: state.app.auth.isAuthenticated,
      registrationErrors: state.app.auth.errors,
    };
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      password2,
    };
    console.log("Registering...", userData);
    dispatch(appOperations.register(userData));
  };

  useEffect(() => {
    if (registrationSuccess) props.history.push(`/login`);
  }, [registrationSuccess, props.history]);

  return (
    <div id="maze_registration_page">
      <PublicHeader />
      <div className="container">
        <div className="row" style={{ marginTop: "7rem" }}>
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <div className="valign-wrapper" id="back_to_login">
                <KeyboardBackspace />
                Back to login
              </div>
            </Link>
            <div className="col s12" style={{ paddingLeft: "11px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={handleSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={handleNameChange}
                  value={name}
                  error={registrationInfo.registrationErrors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: registrationInfo.registrationErrors.name,
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">
                  {registrationInfo.registrationErrors.name}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={handleEmailChange}
                  value={email}
                  error={registrationInfo.registrationErrors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: registrationInfo.registrationErrors.email,
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {registrationInfo.registrationErrors.email}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={handlePasswordChange}
                  value={password}
                  error={registrationInfo.registrationErrors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: registrationInfo.registrationErrors.password,
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {registrationInfo.registrationErrors.password}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={handlePassword2Change}
                  value={password2}
                  error={registrationInfo.registrationErrors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: registrationInfo.registrationErrors.password2,
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">
                  {registrationInfo.registrationErrors.password2}
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
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Registration.propTypes = {
  a: PropTypes.object,
};

export default Registration;
