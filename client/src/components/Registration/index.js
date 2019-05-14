
import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import "./style.css";

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

    registerUser = e => {
        console.log("here");
        e.preventDefault();
        const { username, password, email } = this.state;
        if (username === '' || password === '' || email === '') {
            this.setState({
                showError: true,
                loginError: false,
                registerError: true,
            });
        } else {
          axios
          //HERE WE POST TO THE BACKEND ROUTES
            .post('http://localhost:5000/api/register', {
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
            if(response.status === 201){
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
                {/* <center> */}
                <div className="card-panel white light-2">
                    <div id="top">
                        <div className="card-panel blue darken-4">
                            <span className="grey-text text-lighten-2" id="appName">
                                <h1>Register</h1>
                            </span>
                            <span className="grey-text text-lighten-2">
                                <p className="create-account"> Please fill in this form to create an account. </p>
                            </span>
                        </div>
                    </div>

             <div className="container signin">
                        <p><a href="/signinform">Already have an account? Login</a></p>
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
                    <p>The content and functionality of this website is designed for law-abiding citizens with the intent to
                simplify and quantify law-abiding activities.</p>
                    <p>ThisforThat does not condone the use of its’ proprietary app for transactions based in coercion or
                        manipulation; any criminals in use of app for malice intent will be removed from the community.
                        ThisforThat encourages users to follow the golden rule, “do onto others as you would have them do onto
                you” and is a strong ally to abuse victims.</p>
                    <p>By clicking the ‘Register’ button above, you designate that you will not host, harbor or pursue criminal
                activities via ThisforThat and will be an ally to those who are bullied. </p>
                    <p></p>
                    <p></p>
                    </div> 
                    <div className="container buttons">
                    <input type="submit" value="Register" className="btn-large waves-effect waves-light green" />
                    
                    <br></br>
                    <br></br>
                    <a href="https://www.stopbullying.gov/" id="button" className="btn-large waves-effect waves-light red">I prefer to stay a bully</a>
                        <p></p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Registration
