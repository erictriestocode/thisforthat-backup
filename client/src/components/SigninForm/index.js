//set imports
import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";


class SigninForm extends Component {

  state = {
    email: '',
    password: ''
  }

  handleTextChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    // functionToPushDataIntoDB(this.state)
    // console.log(this.state);
    const { email, password } = this.state;
    axios
      //HERE WE POST TO THE BACKEND ROUTES
      .post('/api/login', {
        email,
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
        //console.log(response);
        if (response.status === 200) {
          this.props.history.push('/home');
        }
      })
      .catch(error => {
        // console.log(error);
        // console.log(error.response);
        //   if (error.response.data === 'username or email already taken') {
        //     this.setState({
        //       showError: true,
        //       loginError: true,
        //       registerError: false,
      });

    //}
    //});

  }

  render() {

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div className="signin-container">
          <div class="z-depth-1 grey lighten-4 row">
            <form onSubmit={this.handleSubmit}>
              <label>Email</label><input type="text" name="email" onChange={this.handleTextChange} />
              <label>Password</label><input type="password" name="password" onChange={this.handleTextChange} />
              <button type="submit" className="btn-large waves-effect waves- blue darken-4">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SigninForm


