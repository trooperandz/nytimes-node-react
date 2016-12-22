import React from 'react';
import { Link } from 'react-router';

export default class Settings extends React.Component {
    render() {
        return(
            <div>
                {/*TODO: place in component*/}
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar sub-nav">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <a class="navbar-brand" href="#">My Settings</a>
                                </div>
                                <div id="navbar" class={"navbar-collapse navbar-right "}>
                                    <ul class="nav navbar-nav">
                                        <li>
                                            <Link to="">My Account</Link>
                                        </li>
                                        <li>
                                            <Link to="">My Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="">My Categories</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <p>This is where your settings will soon live...</p>
                    </div>
                </div>
            </div>
        );
    }
}