
//set imports
import React, { Component } from "react";
import {AuthConsumer} from '../AuthContext';
import "./style.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';


class Navbar extends Component {
//   state = {
//     userName: '',
    
// }

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
   //this.UserRequesting();
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    
    });
  }

//   UserRequesting = () => {
//     return axios.get('/api/findalltransUser')
//         .then((res) => {
//             this.setState({ userName: res.data[0].User_Name_requesting_service});
//             console.log("username sending : ", res.data[0].User_Name_requesting_service);

            
//         });
// };

  render() {
    // const style = {
    //   color: 'white'
    // };
    return (
      <div>
        <div>

         < nav >
           <div className="nav-wrapper z-depth-3">               {/* THIS IS WHERE THE SUMMARY WILL GO SANTIAGO */}
              <a href="/home" className="center brand-logo">ThisforThat</a>
               <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
               <ul className="left hide-on-med-and-down">
                 <li>
                  <a>Token Bank:</a>
                 </li>
                 <li><a className="secondarytxt1">+ {/* EXACTLY HERE SANTIAGO */}</a></li>
                 <li><a className="secondarytxt2">- {/* EXACTLY HERE SANTIAGO */}</a></li>
               </ul>
              
              <ul className="right hide-on-med-and-down">
                 <li>
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
        </div >
        <a href="#" data-target="slide-out" className="sidenav-trigger"></a>
      </div >
    );
  }
}

export default Navbar

