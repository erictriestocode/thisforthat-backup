import React, { Component } from 'react';
import axios from 'axios';
//import "./style.css";


class Transaction extends Component {

    
    state = {
        id: '',
        Transaction_Desc: '',
        Tokens_Transaction_amount: '', 
        User_Name_requesting_service: '',
        User_Name_Providing_service: '',
        TotalTokensBalance: '',
        created_at: '',
        createdAt: '',
        updatedAt: '',	 
        UserId: ''
    }

    componentDidMount() {
        this. UserRequesting();
        this.UserIdRec();
      }

   //user name requesting transaction
    UserRequesting = () => {
        return axios.get('http://localhost:5000/api/findalltransUser')
        .then( res=>
         console.log("username sending : ", res.data[0].User_Name_requesting_service)
         ); 
         };

      //user ID receiving transaction
    UserIdRec = () => {
        return axios.get('http://localhost:5000/api/findalluser')
        .then( res=>{
            console.log("This is the userid res:", res);
            for (var i=0;i<res.data.length; i++){
                if(res.data[i].user="st"){
                var userId= res.data[i].id
                
                    // console.log("Transaction page data : ", res.data.username);
                    // console.log("Transaction page data : ", res.data.email);
                    // console.log("Transaction page data : ", res.data.id)
                }

                console.log("user receiving id : ", userId);
            };
        }
         
         ); 
         };



    render(){
        return (
            <div>
            <div className="form-container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <p className="cool-font">Transaction</p>
                        <input className="form-control" type="text" id="Transaction_Desc" placeholder="Write a description for your trasnaction"></input>
                        <br />
                        <p className="cool-font">Tokens (Each Token equals 15 Minutes)</p>
                        <input className="form-control" rows="3" id="Tokens_Transaction_amount" placeholder="Transaction amount"></input>
                        <br />
                        {/* <p className="cool-font">Request time from...</p>
                        <input className="form-control" rows="3" id="User_Name_requesting_service" placeholder="Username of the user you are requesting from"></input> */}

                        <br />
                        <p className="cool-font">Send time to...</p>
                        <input className="form-control" rows="3" id="User_Name_Providing_service" placeholder="Username of the user you want to send time to"></input>
                        <br />
                        {/* <p className="cool-font">AailableTokensBalance</p>
                        <input className="form-control" rows="3" id="TotalTokensBalance" placeholder="Total Tokens Balance"></input> */}

                        <button id="transreques-submit" className="btn btn-lg pull-right" href="profile.html">Submit!</button>
                    </div>
                </div>
             </div>
             <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h2>Testing</h2>
                        <hr />
                            <div id="test-area"></div>
                    </div>
                </div>
            </div>
        </div>
        );
    };
}

export default Transaction