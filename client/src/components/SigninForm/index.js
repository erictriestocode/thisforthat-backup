//set imports
import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class SigninForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleTextChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = this.state;
    axios
      //HERE WE POST TO THE BACKEND ROUTES
      .post("/api/login", {
        email,
        password
      })
      .then(response => {
        if (response.status === 200) {
          this.props.history.push("/home");
        }
      })
      .catch(error => {});
  };

  render() {
    return (
      <div>
        <div className="card-panel blue darken-4">
          <span className="grey-text text-lighten-2">
            <div className="center brand-logo">ThisforThat</div>
          </span>

          <span className="grey-text text-lighten-2" id="appName">
            <h1 className="signin">Sign In</h1>
          </span>
        </div>
        <div>
          <br />
          <br />
          <br />
          <div className="signin-container">
            <div class="z-depth-1 grey lighten-4 row">
              <form onSubmit={this.handleSubmit}>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={this.handleTextChange}
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleTextChange}
                />
                <button
                  type="submit"
                  className="btn-large waves-effect waves- blue darken-4"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SigninForm;
