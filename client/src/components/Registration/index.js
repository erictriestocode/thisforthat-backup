
import React, { Component } from 'react';
import history from '../../history'
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
            .catch(error => {
            //   console.log(error);
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
                    <div class="card-panel white light-2">
                        <div id="top">
                                <div class="card-panel blue darken-4">
                                    <span class="grey-text text-lighten-2" id="appName">
                                        <h1>Register</h1>
                                    </span>
                                    <span class="grey-text text-lighten-2">
                                        <p> Please fill in this form to create an account. </p>
                                    </span>
                                </div>
                        </div>

                        <div class="container signin">
                            <p> <a href="/">Already have an account?</a></p>
                        </div>

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
                                <input type="submit" value="Register" />
                            </form>
            </div>
                        
              {/* <select
                            className="form-group"
                            type="text"
                            name="position"
                            onChange={this.handleTextChange}
                        >
                            <option value="PG">PG</option>
                            <option value="SG">SG</option>
                            <option value="SF">SF</option>
                            <option value="PF">PF</option>
                            <option value="C">C</option>
                        </select>
                        <input
                            className="form-group"
                            type="text"
                            name="class"
                            placeholder="Class"
                            onChange={this.handleTextChange}
                        /> */}
                        {/* <br />
                        <input type="submit" value="Add Player" /> */}
        {/* </form> */}
        {/* </div> */}
                        {/* <div class="container">
                            <div class="form-group">
                                <label for="email"><b>Enter your Email:</b></label>
                                <input class="form-control" type="email" placeholder="Enter email" name="email" id="email-input" required></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="firstname"><b>Username:</b></label>
                            <input class="form-control" type="text" placeholder="Enter preferred username" name="username" id="firstname-input" required></input>
                        </div>
                        <div class="form-group">
                            <label for="psw"><b>Password;</b></label>
                            <input class="form-control" type="password" placeholder="Enter Password" name="psw" id="password-input" required></input>
                        </div>
                        <p>The content and functionality of this website is designed for law-abiding citizens with the intent to
                simplify and quantify law-abiding activities.</p>
                        <p>ThisforThat does not condone the use of its’ proprietary app for transactions based in coercion or
                            manipulation; any criminals in use of app for malice intent will be removed from the community.
                            ThisforThat encourages users to follow the golden rule, “do onto others as you would have them do onto
                you” and is a strong ally to abuse victims.</p>
                        <p>By clicking the ‘I Agree’ button below, you designate that you will not host, harbor or pursue criminal
                activities via ThisforThat and will be an ally to those who are bullied. </p>

                        <form action="#"> */}
                {/* <p>
                                <label>
                                    <input type="checkbox" />
                                    <span>I Agree</span>
                                </label>
                            </p> */}

                {/* <div class="container signin">
                    <p><a href="https://www.stopbullying.gov/">I prefer to stay a bully</a></p>
                </div>
                        </form>
            <button id="transreques-submit" class="btn btn-lg pull-right" href="profile.html">Submit!</button>
                    </div >
                </center >
            </div > */}

            </div>
        )
    }
}
export default Registration
