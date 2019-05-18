
import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import "./style.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class Registration extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        showError: '',
        loginError: '',
        registerError: ''
    }

    handleTextChange = evt => {
        const { name, value } = evt.target
        this.setState({ [name]: value })
    }

    handleSubmit = evt => {
        evt.preventDefault();
        // functionToPushDataIntoDB(this.state)
        // console.log(this.state);
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems);
          });
      }

    registerUser = e => {
        console.log("Registration Process Started!");
        e.preventDefault();
        const { username, password, email } = this.state;
        if (username === '' || password === '' || email === '') {
            this.setState({
                showError: true,
                loginError: false,
                registerError: true,
            });
        } else {
            console.log("Starting API Call!")
            axios
                //HERE WE POST TO THE BACKEND ROUTES
                .post('/api/register', {
                    email,
                    username,
                    password
                })
                .then(response => {
                    //   console.log("response:", response);
                    //   this.setState({
                    //     messageFromServer: response.status,
                    //     showError: false,
                    //     loginError: false,
                    //     registerError: false,
                    //   });
                    if (response.status === 201) {
                        this.props.history.push('/signinform');
                    }
                })
                .catch(err => {
                    console.log(err);
                    //   console.log(error.response);
                    //   if (error.response.data === 'username or email already taken') {
                    //     this.setState({
                    //       showError: true,
                    //       loginError: true,
                    //       registerError: false,
                });

            //}
            //});
        }
    };


    render() {
        return (
            <div>
                <div className="card-panel blue darken-4">
                    <span className="grey-text text-lighten-2">
                    <div className="center brand-logo">ThisforThat</div>
                    </span>

                    <span className="grey-text text-lighten-2" id="appName">
                        <h1 className="signin">Register</h1>
                    </span>
                </div>
                <br></br>
                        <p className="alreadyHaveAccount center"><a href="/signinform">Already have an account? Login</a></p>
                        <form
                            id="RecruitForm"
                            onSubmit={this.registerUser}
                        >
                            <input
                                className="form-group"
                                type="text"
                                name="username"
                                placeholder="User Name"
                                onChange={this.handleTextChange}
                            />
                            <input
                                className="form-group"
                                type="text"
                                name="email"
                                placeholder=" Email"
                                onChange={this.handleTextChange}
                            />
                            <select
                                className="form-group"
                                type="text"
                                name="position"
                                onChange={this.handleTextChange}
                            >
                            </select>
                            <input
                                className="form-group"
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleTextChange}
                            />
                            <br />
                            {/* <input type="submit" value="Register" className="btn-large waves-effect waves-light green" /> */}
                            
                            <div className="container termsConditions">
                             <ul class="collapsible">
                                <li>
                                <div class="collapsible-header"><i class="material-icons">view_headline</i>Read the Terms & Conditions</div>
                                <div class="collapsible-body"><span>
                                <p className= "tctext">The content and functionality of this website is designed for law-abiding citizens with the intent to
                simplify and quantify law-abiding activities.</p>
                        <p className= "tctext">ThisforThat does not condone the use of its’ proprietary app for transactions based in coercion or
                                    manipulation; any criminals in use of app for malice intent will be removed from the community.
                                    ThisforThat encourages users to follow the golden rule, “do onto others as you would have them do onto
                you” and is a strong ally to abuse victims.</p>
                        <p className= "tctext">By clicking the ‘Register’ button above, you designate that you will not host, harbor or pursue criminal
                activities via ThisforThat and will be an ally to those who are bullied. </p>
                                <p></p>
                                <p></p>
                            </span>
                            </div>
                                </li>
                                </ul>
                            <div className="container buttons">
                                <input type="submit" value="Register" className="btn-large waves-effect waves-light green" />

                                <br></br>
                                <br></br>
                                <a href="https://www.stopbullying.gov/" id="stopBullyButton" className="btn-large waves-effect waves-light red">I prefer to stay a bully</a>
                                <p></p>
                            </div>
                            </div>
                        </form>
                        </div>
        )
    }
}
export default Registration
