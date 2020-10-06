import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import copy from "copy-to-clipboard";
import "./styles.scss";
const M = require("materialize-css/dist/js/materialize");
function Account(props) {
  const networkId = useSelector((state) => {
    return state.app.networkId;
  });

  const handleCopyClick = () => {
    const copied = copy(networkId);

    if (copied)
      M.toast({
        html: "Copied!",
        classes: "text-center",
      });
  };

  return (
    <div id="maze_account_page">
      <div className="section no-pad-bot no-pad-top" id="index-banner">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /> <br /> <br />
          <div className="row center">
            <h5 className="header col s12 light">
              Your network ID: <b>{networkId}</b>
            </h5>
          </div>
          <div className="row center">
            <a
              href="#"
              onClick={handleCopyClick}
              id="download-button"
              className="btn-large waves-effect waves-light"
            >
              Copy
            </a>
          </div>
          <br />
          <br />
        </div>
      </div>

      <footer className="page-footer teal no-padding center">
        <div className="footer-copyright">
          <div className="container">
            <a
              className="white-text text-lighten-3"
              href="https://www.accionlabs.com/"
            >
              &copy; 2020 Accionlabs.
            </a>{" "}
            All rights reserved.
          </div>
        </div>
      </footer>

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>
    </div>
  );
}

Account.propTypes = {
  a: PropTypes.object,
};

export default Account;
