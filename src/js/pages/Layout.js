import React from 'react';
import { Link } from 'react-router';

import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

export default class Layout extends React.Component {
    render() {
        const { location } = this.props;

        return(
            <div>
                <Nav location={location} />

                <div class="container-fluid">
                    <div class="row">
                        <div class="jumbotron text-center">
                            <h1>React News</h1>
                            <p>Powered by <span class="text-info">ReactJS</span></p>
                        </div>
                    </div>
                </div>

                <div class="container">
                    {this.props.children}
                    <br/>
                    <br/>
                    <br/>
                </div>

                <Footer/>
            </div>
        );
    }
}