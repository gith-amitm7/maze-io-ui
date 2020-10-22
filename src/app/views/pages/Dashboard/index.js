import React from "react";
import PropTypes from "prop-types";
import graphics1 from "assets/images/graphics1.png";
import graphics2 from "assets/images/graphics2.png";
import graphics3 from "assets/images/graphics3.png";

import "./styles.scss";

function Dashboard(props) {
  return (
    <div id="maze_dashboard">
      <div className="section no-pad-bot no-pad-top" id="index-banner">
        <div className="container">
          <br />
          <br />
          <br />
          <h1 className="header center black-text">Maze Framework</h1>
          <div className="row center">
            <h5 className="header col s12 light">
              Maze is a decentralized application framework to build next
              generation application.
            </h5>
          </div>
          <div className="row center">
            <a
              href="http://materializecss.com/getting-started.html"
              id="download-button"
              className="btn-large waves-effect waves-light"
            >
              Download
            </a>
          </div>
          <br />
          <br />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row card-tile-container">
            <div className="col s12 m4 card-tile">
              <div className="icon-block card-panel hoverable">
                <div className="img-wrapper">
                  <img src={graphics1} alt="What is Maze framework?" />
                </div>
                <h5 className="center">What is Maze framework?</h5>
                <p className="light">
                  The Maze framework is a <b>blockchain</b> based{" "}
                  <b>decentralized</b> application framework. Maze is built to
                  expedite implementation of <b>decentralized</b> applications
                  that are not dependent on a single <b>“hosted”</b> server or
                  cloud, but can be deployed as distributed applications across
                  several <b>“nodes”</b>.
                </p>
              </div>
            </div>

            <div className="col s12 m4 card-tile">
              <div className="icon-block card-panel hoverable">
                <div className="img-wrapper">
                  <img src={graphics2} alt="How Maze works?" />
                </div>
                <h5 className="center">How Maze works?</h5>

                <p className="light">
                  The Maze framework provides simple API's for applications to
                  integrate and use decentralized databases. Maze provides
                  various databases of choice and organization can use multiple
                  databases along with their primary databases to leverge the
                  benefits of decentralized databases without making tons of
                  changes.
                </p>
              </div>
            </div>

            <div className="col s12 m4 card-tile">
              <div className="icon-block card-panel hoverable">
                <div className="img-wrapper">
                  <img src={graphics3} alt="Maze Live!" />
                </div>

                <h5 className="center">
                  Maze <b>Live!</b>
                </h5>

                <p className="light">
                  We built a simple decentralized application using Maze
                  framework for you to try and check it out yourself. Click here
                  to navigate to the application.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <footer className="page-footer no-padding center">
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

Dashboard.propTypes = {
  a: PropTypes.object,
};

export default Dashboard;
