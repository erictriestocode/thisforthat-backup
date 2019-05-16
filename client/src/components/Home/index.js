import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style-home.css";
import axios from 'axios';
import moment from 'moment';
import Navbar from '../NavBar';


class Home extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.Usertransction();
    }


    Usertransction = () => {
        axios.get('/api/findalltran')
            .then(res => {
                console.log("Home Usertrans: ", res)
                this.setState({ data: res.data })
            })
            .catch(err => {
                console.log(err)
            });

    };

    render() {
        // console.log("home props:", this.props);
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Link to='/transaction'>
                        <a href="/transaction" id="addbutton" className="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">add</i></a>
                    </Link>

                    <div className="timeline">
                        {/* "re-render" because we want new info to show  */}
                        {this.state.data.map(item => {
                            return (
                                //indicate id as key to make react work 
                                <div className="timeline-event" key={item.id}>
                                    <div className="card timeline-content">
                                        <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">{item.User_Name_Providing_service} paid {item.User_Name_requesting_service}  {item.Tokens_Transaction_amount} tokens<i
                                                className="material-icons right">more_vert</i></span>
                                        </div>
                                        <div className="card-reveal">
                                            <span className="card-title grey-text text-darken-4">Payment for: {item.Transaction_Desc}<i
                                                className="material-icons right">close</i></span>
                                            <p>Sent at: {moment(item.createdAt).format("dddd, MMMM Do YYYY, h:mm a")}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            //   <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

            //         <!--Compiled and minified JavaScript-- >
            //             <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
            //             <script>
            //                 M.AutoInit();
            // </script> */}
        );
    }
}

export default Home

