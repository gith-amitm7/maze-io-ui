import React, { useEffect } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Build from "@material-ui/icons/Build";
import { appOperations } from "app/store/state/app";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const M = require("materialize-css/dist/js/materialize");

function MenuDropDown({ name, email }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(appOperations.logout());
  };

  const handleAccountClick = () => {
    history.push("/account");
  };

  useEffect(() => {
    var dropdowns = document.querySelectorAll(".dropdown-trigger");
    for (var i = 0; i < dropdowns.length; i++) {
      M.Dropdown.init(dropdowns[i], {
        container: document.getElementById("maze_header"),
        coverTrigger: false,
      });
    }
  }, []);

  return (
    <div id="maze_profile_dropdown" className="dropdown-content">
      <div className="profile white-text">
        <div className="valign-wrapper profile-icon">
          <AccountCircle fontSize="large" color="inherit" />
        </div>
        <div className="profile-info valign-wrapper">
          <div className="name">{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <div className="dropdown-actions">
        <div className="dropdown-action" onClick={handleAccountClick}>
          <div>
            <Build />
          </div>
          <div>
            <span>Account</span>
          </div>
        </div>

        <div className="dropdown-action-divider"></div>
        <div className="dropdown-action" onClick={handleLogout}>
          <div>
            <ExitToApp />
          </div>
          <div>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

MenuDropDown.propTypes = {};

export default MenuDropDown;
