import React, { Component } from 'react';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import "./style.css";




class Transaction extends Component {


    
    state = {
        Transaction_Desc: '',
        Tokens_Transaction_amount: '', 
        User_Name_requesting_service: '',
        User_Name_Providing_service: '',
        //TotalTokensBalance: '',
        UserId: '',
        showError: '',
        loginError: '',
        registerError: ''
    }

    handleTextChange = evt => {
        const { name, value } = evt.target
        this.setState({ [name]: value })
    }
    handleSubmit = evt => {
        evt.preventDefault();
        // functionToPushDataIntoDB(this.state)
        // console.log(this.state);
    }
   

    componentDidMount() {
        this. UserRequesting();
        //this.UserIdRec();
       //this.Newtransction();
      }
     

   //grab user name requesting transaction from the API
   UserRequesting = () => {
    return axios.get('http://localhost:5000/api/findalltransUser')
        .then((res) => {
            this.setState({ User_Name_requesting_service: res.data[0].User_Name_requesting_service, UserId:res.data[0].UserId});
            console.log("username sending : ", res.data[0].User_Name_requesting_service)
            console.log("username sending : ", res.data[0].UserId)
            
        });
};
    // UserRequesting = () => {
    //     return axios.get('http://localhost:5000/api/findalltransUser')
    //     .then( res=>
    //        //res.data[0].User_Name_requesting_service,
    //     this.setState({ User_Name_requesting_service: res.data[0].User_Name_requesting_service }),
    //     //console.log("username sending : ", res.data[0].User_Name_requesting_service)//.data[0].User_Name_requesting_service
    //     //this.setState({ User_Name_requesting_service: res.data[0].User_Name_requesting_service })
    //      ); 
    //      };

     // look for user ID receiving transaction within the user table based on user name
    // UserIdRec = () => {
    //     return axios.get('http://localhost:5000/api/findalluser')
    //     .then(res =>{
    //         //var receiverId= res.data.id
    //         console.log("This is the userid res:", res.data.username);
    //         for (var i=0;i<res.data.length; i++){
    //             if(res.data[i].user === "st"){//User_Name_Providing_service  User_Name_requesting_service
    //                 //console.log("user receiving id : ", res.data.id);
    //             var userId= res.data[i].id;
    //             // console.log("user receiving id : ", userId);
    //                 // console.log("Transaction page data : ", res.data.username);
    //                 // console.log("Transaction page data : ", res.data.email);
    //                 // console.log("Transaction page data : ", res.data.id)
    //                                          };
    //             console.log("user receiving id : ", userId);
    //               };
    //              }
    //      )};

// handle/grab information from trnasaction page
        



        transactionReq = e => {
            console.log("here");
            e.preventDefault();
            const { Transaction_Desc, Tokens_Transaction_amount, User_Name_requesting_service, User_Name_Providing_service,UserId} = this.state;
            if (Transaction_Desc === '' || Tokens_Transaction_amount === '' ||  User_Name_Providing_service === '') {
                this.setState({
                    showError: true,
                    loginError: false,
                    registerError: true,
                });
            } else{
                axios.post('http://localhost:5000/api/sendTransRequest', {
                Transaction_Desc,
                Tokens_Transaction_amount, 
                User_Name_requesting_service,
                User_Name_Providing_service,
                //TotalTokensBalance,
                UserId
            })
            .then(response => {
            
            if(response.status === 201){
              this.props.history.push('/home');
            } 
            })
            .catch(err => {
              console.log(err);
           
                });

            }
        };
          
//HERE WE POST TO THE BACKEND ROUTES
        // Newtransction = () => {
            
        //       axios.post('http://localhost:5000/api/sendTransRequest', {
        //             Transaction_Desc,
        //             Tokens_Transaction_amount, 
        //             User_Name_requesting_service,
        //             User_Name_Providing_service,
        //             //TotalTokensBalance,
        //             UserId
        //         })
        //         .then(response => {
                
        //         if(response.status === 201){
        //           this.props.history.push('/Profile');
        //         } 
        //         })
        //         .catch(err => {
        //           console.log(err);
               
        //             });
    
        //         };
            


    render(){
        return (
            <div>
            <div className="form-container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <p className="cool-font">Transaction</p>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="Transaction_Desc" 
                        placeholder="Write a description for your trasnaction"
                        onChange={this.handleTextChange}
                        />
                        <br />
                        <p className="cool-font">Tokens (Each Token equals 15 Minutes)</p>
                        <input 
                        className="form-control" 
                        rows="3" 
                        name="Tokens_Transaction_amount" 
                        placeholder="Transaction amount"
                        onChange={this.handleTextChange}
                        />
                        <br />
                        {/* <p className="cool-font">Request time from...</p>
                        <input className="form-control" rows="3" id="User_Name_requesting_service" placeholder="Username of the user you are requesting from"></input> */}

                        <br />
                        <p className="cool-font">Send time to...</p>
                        <input 
                        className="form-control"
                         rows="3" 
                         Name="User_Name_Providing_service" 
                         placeholder="Username of the user you want to send time to"
                         onChange={this.handleTextChange}
                         />
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