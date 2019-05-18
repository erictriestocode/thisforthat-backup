// import React from 'react';
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import logo from './logo.svg';
import "./App.css";

// Import Components---------------------------------------
// import Navbar from "./components/NavBar";
import Home from "./components/Home";
import SigninForm from "./components/SigninForm";
import LandingPage from "./components/landingPage";
import Profile from "./components/Profile";
import Help from "./components/Help";
import Registration from "./components/Registration";
import Transaction from "./components/Transaction";
import { AuthProvider } from "./components/AuthContext";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <AuthProvider>
            {/* <Navbar/> */}
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/signinform" component={SigninForm} />
              <Route path="/home" component={Home} />
              <Route path="/help" component={Help} />
              <Route path="/registration" component={Registration} />
              <Route path="/transaction" component={Transaction} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
