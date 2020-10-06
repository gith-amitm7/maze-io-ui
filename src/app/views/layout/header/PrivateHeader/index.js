import React from "react";
import Menu from "@material-ui/icons/Menu";
import MenuOpen from "@material-ui/icons/MenuOpen";
import { useSelector } from "react-redux";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuDropDown from "./MenuDropdown";
import "./styles.scss";
import { Link } from "react-router-dom";

function PrivateHeader({ onTriggerClick, sideMenuCollapsed }) {
  const loginInfo = useSelector((state) => {
    return {
      name: state.app.user.name,
      networkId: state.app.networkId,
      email: state.app.user.email,
    };
  });

  return (
    <div id="maze_header">
      <div className="navbar-fixed">
        <nav className="teal lighten-2" role="navigation">
          <div className="nav-wrapper header-wrapper">
            <ul className="left">
              <li>
                <a
                  className="sidemenu-trigger"
                  href="#!"
                  onClick={onTriggerClick}
                >
                  {sideMenuCollapsed ? (
                    <Menu fontSize="large" />
                  ) : (
                    <MenuOpen fontSize="large" />
                  )}
                </a>
              </li>
            </ul>

            <Link
              className="brand-logo"
              id="logo-container"
              to={{ pathname: "/" }}
            >
              <b>MAZE</b>
            </Link>
            <ul className="right">
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="maze_profile_dropdown"
                >
                  <AccountCircle fontSize="large" />
                  <MenuDropDown name={loginInfo.name} email={loginInfo.email} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* <div className="navbar-fixed secondary-header">
        <nav className="grey lighten-2" role="navigation">
          <div className="nav-wrapper header-wrapper">
            <p className="light">Network ID: {loginInfo.networkId}</p>
          </div>
        </nav>
      </div> */}
    </div>
  );
}

PrivateHeader.propTypes = {};

export default PrivateHeader;
