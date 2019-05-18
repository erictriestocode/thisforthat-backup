//set imports
import React, { Component } from "react";
import "./style.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';
import { createBrowserHistory } from 'history';

class Navbar extends Component {
    state = {
      userName: '',
      sentToken: '',
      recToken: ''

  }

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    this.UserRequesting();
    this.UsernameRequesting();
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

    // UsernameRequesting = () => {
    //   return axios.get('/api/findalltransUser')
    //       .then((res) => {
    //           this.setState({ userName: res.data.dbtransaction[0].User_Name_requesting_service});
    //           //console.log("username sending : ", res.data.dbtransaction.dbtransaction[0].User_Name_requesting_service);


  //         });
  // };

  UsernameRequesting = () => {
    return axios.get('/api/signeduser')
        .then((res) => {
          this.setState({ userName: res.data[0].username});
            console.log("username sending : ", res.data[0].username);
            console.log("username sending : ", res.data[0].id);
          });
        };




    //********sum totals sent/recvd */
    UserRequesting = () => {
      return axios.get('/api/findalltransUser')
          .then((res) => {

              var result = res.data.dbtransaction;
              var sentToken = 0;
              var currentUser = res.data.userid;
              var recToken = 0;


              for (var i = 0; i < result.length; i++) {
                  if (result[i].UserId == currentUser) {
                      sentToken += parseInt(result[i].Tokens_Transaction_amount);
                      this.setState({sentToken: sentToken});
                  }
                  else {
                      recToken += parseInt(result[i].Tokens_Transaction_amount);
                      this.setState({recToken: recToken});
                  }
              }
              console.log("username sentToken : ", sentToken);
              console.log("username recToken : ", recToken);
          })
  };
  
  render() {
    return (
      <div>   
        <div>
          <div>

            < nav >
              <div className="nav-wrapper z-depth-3"> 
                <a href="/home" className="center brand-logo">ThisforThat</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="left hide-on-med-and-down">
                  <li>
                    <a>Token Bank:</a>
                  </li>
                  <li><a className="secondarytxt1">+ {this.state.recToken}</a></li>
                  <li><a className="secondarytxt2">- {this.state.sentToken} </a></li>
                </ul>

                <ul className="right hide-on-med-and-down">
                  <li>
                  </li>
                  <li><a href="/profile"><i className="fas fa-user-circle fa-lg"></i>{this.state.userName}</a></li>
                  <li><a href="/transaction">Transactions</a></li>
                  <li><a href="/api/logout">Logout</a></li>
                </ul>
              </div>
            </nav >


            <ul className="sidenav" id="mobile-demo">
            <li><a href="/profile"><i className="fas fa-user-circle fa-lg"></i>{this.state.userName}</a></li>
              <li><a href="/home">Home</a></li>
              <li><a href="/transaction">Transactions</a></li>
              <li><a href="/api/logout">Logout</a></li>
              <li>
                <a>Token Bank:</a>
                <li><a className="secondarytxt1"> +{this.state.recToken}</a></li>
                <li><a className="secondarytxt1"> -  {this.state.sentToken}</a></li>
              </li>
            </ul>
          </div >
          <a href="#" data-target="slide-out" className="sidenav-trigger"></a>
        </div >
      </div >
    )
  }
}

export default Navbar
