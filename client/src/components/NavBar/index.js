//set imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

class Navbar extends Component {
  render() {
    const style = {
      color: 'white'
    };
    return (

      <div>
        < nav >
          <div class="nav-wrapper">
            <a href="/home" class="brand-logo">ThisforThat</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="/transaction">Transactions</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </div>
        </nav >
        <ul class="sidenav" id="mobile-demo">
          <li><a href="/home">ThisforThat</a></li>
          <li><a href="/transaction">Transactions</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </div>
    );
  }
  
}

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = sidenav.init(elems, options);
// });


export default Navbar