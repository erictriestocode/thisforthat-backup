import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import "./style.css";
// import "./nav.js";

class Navbar extends Component {
  render() {
    // const style = {
    //   color: 'white'
    // };
    return (

      <div>
        < nav >
          <div className="nav-wrapper">
            <a href="/home" className="brand-logo">ThisforThat</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/transaction">Transactions</a></li>
              <li><a href="/profile"><i className="fas fa-user-circle fa-lg"></i></a></li>
              <li>
                <form>
                  <div className="input-field">
                    <input id="search" type="search" required></input>
                    {/* <label className="label-icon" for="search"><i className="material-icons">search</i></label> */}
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </nav >
        <ul className="sidenav" id="mobile-demo">
          <li><a href="/home">ThisforThat</a></li>
          <li><a href="/transaction">Transactions</a></li>
          <li><a href="/profile"><i className="fas fa-user-circle fa-lg"></i></a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar

