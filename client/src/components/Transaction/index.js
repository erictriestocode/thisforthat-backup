import React, { Component } from 'react';
import history from '../../history'
import axios from 'axios';
import "./style.css";


class Transaction extends Component {

        // state = {
        //     id: '',
        //    Transaction_Desc: '',
        //    Tokens_Transaction_amount: '',
        //    User_Name_requesting_service: '',
        //    User_Name_Providing_service: '',
        //    TotalTokensBalance: '',
        //    created_at: '',
        //    createdAt: '',
        //    updatedAt: '',
        //    UserId

        // }
    
        // handleTextChange = evt => {
        //     const { name, value } = evt.target
        //     this.setState({ [name]: value })
        // }
    
        // handleSubmit = evt => {
        //     evt.preventDefault();
        //     // functionToPushDataIntoDB(this.state)
        //     // console.log(this.state);
        // }
    
    
        // registerUser = e => {
        //     e.preventDefault();
        //     // const {  id, Transaction_Desc, Tokens_Transaction_amount, User_Name_requesting_service, User_Name_Providing_service,
        //     //     TotalTokensBalance, created_at, createdAt, updatedAt, UserId} = this.state;
        //     // if (username === '' || password === '' || email === '') {
        //     //   this.setState({
        //     //     showError: true,
        //     //     loginError: false,
        //     //     registerError: true,
        //     //   });
        //     // } 
        //    //  {
        //       axios
        //       //HERE WE POST TO THE BACKEND ROUTES
        //         .post('http://localhost:5000/api/sendTransRequest', {
        //             id, Transaction_Desc, Tokens_Transaction_amount, User_Name_requesting_service, User_Name_Providing_service,
        //             TotalTokensBalance, created_at, createdAt, updatedAt, UserId
        //         })
        //         .then(response => {
        //         //   console.log("response:", response);
        //         //   this.setState({
        //         //     messageFromServer: response.status,
        //         //     showError: false,
        //         //     loginError: false,
        //         //     registerError: false,
        //         //   });
        //         if(response.status === 201){
        //           this.props.history.push('/Home');
        //         } 
        //         })
        //         .catch(error => {
        //         //   console.log(error);
        //         //   console.log(error.response);
        //         //   if (error.response.data === 'username or email already taken') {
        //         //     this.setState({
        //         //       showError: true,
        //         //       loginError: true,
        //         //       registerError: false,
        //             });
                    
        //           //}
        //         //});
        //     }
        //   ;
    




    render(){
        return (
            <div>
            <div class="form-container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <p class="cool-font">Transaction</p>
                        <input class="form-control" type="text" id="Transaction_Desc" placeholder="Write a description for your trasnaction"></input>
                        <br />
                        <p class="cool-font">Tokens (Each Token equals 15 Minutes)</p>
                        <input class="form-control" rows="3" id="Tokens_Transaction_amount" placeholder="Transaction amount"></input>
                        <br />
                        {/* <p class="cool-font">Request time from...</p>
                        <input class="form-control" rows="3" id="User_Name_requesting_service" placeholder="Username of the user you are requesting from"></input> */}

                        <br />
                        <p class="cool-font">Send time to...</p>
                        <input class="form-control" rows="3" id="User_Name_Providing_service" placeholder="Username of the user you want to send time to"></input>
                        <br />
                        {/* <p class="cool-font">AailableTokensBalance</p>
                        <input class="form-control" rows="3" id="TotalTokensBalance" placeholder="Total Tokens Balance"></input> */}

                        <button id="transreques-submit" class="btn btn-lg pull-right" href="profile.html">Submit!</button>
                    </div>
                </div>
             </div>

             <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
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