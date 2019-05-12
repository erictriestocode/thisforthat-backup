import React, { Component } from 'react';
import "./style-profile.css";


class Profile extends Component {
    render() {
        return (
            <div>
                < section id="main-sections" >
                    <div className="row" id ="main-content">
                        <container>
                            <h1>Total amount of outstanding requested time from others: </h1>
                            <p>VARIABLE </p>
                        </container>
                    </div>
                    <br></br>
                    <div className="row" id ="main-content">
                        <container>
                            <h1>Total amount of outstanding payed time to others: </h1>
                            <p>VARIABLE </p>
                        </container>
                    </div>
                </section >
                <div className="container" >
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile


