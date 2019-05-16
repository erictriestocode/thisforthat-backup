import React, { Component } from 'react';
import { AuthConsumer } from '../AuthContext';
import "./style-profile.css";
import axios from 'axios';
import moment from 'moment';

class Profile extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.Usertransction();
        this.UserRequesting();
    }


    Usertransction = () => {
        axios.get('/api/findalltransUser')
            .then(res => {
                this.setState({ data: res.data.dbtransaction });
               console.log(res.data.dbtransaction);
            })
            .catch(err => {
                console.log(err)
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
                    }
                    else {
                        recToken += parseInt(result[i].Tokens_Transaction_amount);
                    }
                }
                console.log("username sentToken : ", sentToken);
                console.log("username recToken : ", recToken);
            })
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="timeline">
                        {/* "re-render" because we want new info to show  */}
                        {this.state.data.map(item => {
                            return (
                                //indicate id as key to make react work 
                                <div className="timeline-event" key={item.id}>
                                    <div className="card timeline-content">
                                        <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">Transaction Amount: {item.Tokens_Transaction_amount}<i
                                                className="material-icons right">more_vert</i></span>
                                        </div>
                                        <div className="card-reveal">
                                            <span className="card-title grey-text text-darken-4">Payment for: {item.Transaction_Desc}<i
                                                className="material-icons right">close</i></span>
                                            <p>From: {item.User_Name_Providing_service}</p>
                                            <p>Sent to: {item.User_Name_requesting_service}</p>
                                            <p>Sent at: {moment(item.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile