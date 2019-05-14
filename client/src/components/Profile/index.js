import React, { Component } from 'react';
import "./style-profile.css";


class Profile extends Component {
    render() {
        return (
            <div>
                {/* < section id="main-sections" >
                    <div class="hide-on-med-and-down">
                        <div class="col s12 m7">
                            <div class="card horizontal" id="requested">
                                <div class="card-image">
                                    <img src="https://github.com/ShelbyMarks/thisforthatlogo/blob/master/logo-2-min.jpg?raw=true"></img>
                                </div>
                                <div class="card-content1">
                                    <br></br>
                                    <h3>##</h3>
                                </div>
                            </div>
                            <div class="card horizontal">
                                <div class="card-image">
                                    <img src="https://github.com/ShelbyMarks/thisforthatlogo/blob/master/logo-2-min.jpg?raw=true"></img>
                                </div>
                                <div class="card-content2">
                                    <br></br>
                                    <h3>##</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div class="hide-on-med-and-down">
                    <div id="top">
                        <div class="card-panel grey lighten-2">
                            <span class="blue-text text-darken-4" id="appName">
                                <h1>Total Amount of Others' Time:</h1>
                            </span>
                            <span class="blue-text text-darken-4">
                                <p class="create-account"> NEED VARIABLE HERE </p>
                            </span>
                        </div>
                    </div>
                </div>
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
                    </div>
                </div>
            </div >

        )
    }
}

export default Profile
