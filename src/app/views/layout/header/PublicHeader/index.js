import React from "react";
import { Link } from "react-router-dom";

function PublicHeader() {
  return (
    <div className="navbar-fixed public-header">
      <nav className="z-depth-0">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo black-text center">
            {/* <SettingsInputAntenna fontSize="large" /> */}
            <h2 style={{ padding: "0px 20px" }}>
              <span className="logo">
                <b>#</b>
              </span>
              <b>MAZE</b>
            </h2>
          </Link>
        </div>
      </nav>
    </div>
  );
}

PublicHeader.propTypes = {};

export default PublicHeader;
