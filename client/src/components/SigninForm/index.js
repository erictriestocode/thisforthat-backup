//set imports
import React, { Component } from 'react';

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
        console.log(this.state);
    }


render() {


  return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <label>Email</label><input type="text" name="email" onChange={this.handleTextChange}/>
              <label>password</label><input type="text" name="password" onChange={this.handleTextChange}/>
              <button type="submit">Submit</button>
          </form>
      </div>
  )
}
}

export default  SigninForm

