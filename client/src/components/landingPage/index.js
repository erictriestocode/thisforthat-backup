import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper z-depth-3">
            <div className="center brand-logo">ThisforThat</div>
          </div>
        </nav>
        {/* rotating start */}
        <div class="hide-on-small-only">
          <div className="row center">
            <img
              class="image"
              src="https://github.com/ShelbyMarks/thisforthatlogo/blob/master/logo-2-min.jpg?raw=true"
              alt=""
            />
            <img
              class="image"
              src="https://github.com/ShelbyMarks/thisforthatlogo/blob/master/logo-2-min.jpg?raw=true"
              alt=""
              width="120"
              height="200"
            />
            <img
              class="image"
              src="https://github.com/ShelbyMarks/thisforthatlogo/blob/master/logo-2-min.jpg?raw=true"
              alt=""
              width="120"
              height="200"
            />
          </div>
        </div>
        <br />
        {/* rotating end*/}

        <h1 className="header center orange-text">
          ...Time is your commodity{" "}
        </h1>

        <div className="container">
          <div className="row">
            <div className="lpContainer">
              <Link to="/registration">
                <a
                  href="/registration"
                  id="button"
                  className="btn-large waves-effect waves- orange darken-1 hoverable"
                >
                  Register
                </a>
              </Link>
              <Link to="/signinform">
                <a
                  href="/signinform"
                  id="button"
                  className="btn-large waves-effect waves- blue darken-4 hoverable"
                >
                  SignIn
                </a>
              </Link>
            </div>
          </div>
          <br />
          <br />

          <div className="container">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text">
                    <i className="material-icons">lightbulb_outline</i>
                  </h2>
                  <h5 className="center">Learn</h5>

                  <p className="light">
                    Develop & finetune desired skills by trading your time with
                    other users
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text">
                    <i className="material-icons">group</i>
                  </h2>
                  <h5 className="center">Grow</h5>
                  <p className="light">
                    Grow your network & meet new talented friends
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text">
                    <i className="material-icons" color="orange">
                      swap_vertical_circle
                    </i>
                  </h2>
                  <h5 className="center">Trade</h5>

                  <p className="light">
                    Learn the art of trading & capitalize on your desirable
                    skill-sets{" "}
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
