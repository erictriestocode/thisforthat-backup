
import React, { Component } from 'react';
import "./style.css";

class Transaction extends Component {
    render() {
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

                 <div class="transaction-container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <h2>Testing</h2>
                            <hr />
                                <div id="test-area"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Transaction