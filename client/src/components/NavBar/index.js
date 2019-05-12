//set imports
import React, { Component } from "react";
import "./style.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
    });
}
  
  render() {
    // const style = {
    //   color: 'white'
    // };
    return (
      <div>
        <div>
        < nav >
          <div className="nav-wrapper">
            <a href="/home" className="center brand-logo">ThisforThat</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
            <li>
                <form>
                  <div className="input-field">
                    <input id="search" type="search" required></input>
                    {/* <label className="label-icon" for="search"><i className="material-icons">search</i></label> */}
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </li>
              <li><a href="/transaction">Transactions</a></li>
              <li><a href="/profile"><i className="fas fa-user-circle fa-lg"></i></a></li>
            </ul>
          </div>
        </nav >

        <ul className="sidenav" id="mobile-demo">
          <li><a href="/home">ThisforThat</a></li>
          <li><a href="/transaction">Transactions</a></li>
          <li><a href="/profile"><i className="fas fa-user-circle fa-lg"></i></a></li>
        </ul>
      </div>
        <a href="#" data-target="slide-out" className="sidenav-trigger"></a>
      </div>
        );
    }
}

export default Navbar

