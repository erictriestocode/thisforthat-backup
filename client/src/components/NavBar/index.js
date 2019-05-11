import React, { Component } from 'react';
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
              <li><a href="/profile"><i className="fas fa-user-circle fa-lg"></i></a></li>
              <li>
                <form>
                  <div class="input-field">
                    <input id="search" type="search" required></input>
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </nav >
        <ul class="sidenav" id="mobile-demo">
          <li><a href="/home">ThisforThat</a></li>
          <li><a href="/transaction">Transactions</a></li>
          <li><a href="/profile"><i className="fas fa-user-circle fa-lg"></i></a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar

