import React, { Component } from 'react';
import { AuthConsumer } from '../AuthContext';
import "./style-profile.css";
import axios from 'axios';
import moment from 'moment';
import Navbar from '../NavBar';

class Profile extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.Usertransction();
        
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



    deletetrans = (id) => {
        console.log(id)
        axios.get('/api/findtrans/' + id)
            .then(function(response){
                console.log(response)
            })
            //Location.reload()
    };


    render() {
        // console.log("home props:", this.props);
        return (
            <div>
                <Navbar />

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
                                                
                                            <button onClick={() => this.deletetrans(item.id)} >{item.id}</button>

                                            
                                            

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