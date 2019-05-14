import React, { Component } from 'react';
import "./style-home.css";
import axios from 'axios';


class Home extends Component {

    
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
        this. Usertransction();
      }


      Usertransction = () => {
       return axios.get('http://localhost:5000/api/findalltransUser')
       .then( res=>
        console.log("Home Usertrnas: ", res)
        );
       

        };



    render() {
       // console.log("home props:", this.props);
    return (
        <div>
                <div className="container">
                    <div className="timeline">
                        <div className="timeline-event">
                            <div className="card timeline-content">
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Tile<i
                                        className="material-icons right">more_vert</i></span>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Card Title<i
                                        className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-event">
                            <div className="card timeline-content">
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Tile<i
                                        className="material-icons right">more_vert</i></span>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Card Title<i
                                        className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-event">
                            <div className="card timeline-content">
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Tile<i
                                        className="material-icons right">more_vert</i></span>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Card Title<i
                                        className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-event">
                            <div className="card timeline-content">
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Tile<i
                                        className="material-icons right">more_vert</i></span>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Card Title<i
                                        className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        //         <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

        //         <!--Compiled and minified JavaScript-- >
        //             <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
        //             <script>
        //                 M.AutoInit();
        // </script>
    )
}
}

export default Home