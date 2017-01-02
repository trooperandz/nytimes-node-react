import React from 'react';

export default class SubNav extends React.Component {
    render() {
        const { heading, links } = this.props;

        return (
            <div class="row">
                <div class="col-lg-12">
                    <nav class="navbar sub-nav">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <a class="navbar-brand" href="#">{ heading }</a>
                                {/*<a href="#">31 Results</a>*/}
                            </div>
                            <div id="navbar" class="navbar-collapse navbar-right">
                                <ul class="nav navbar-nav">
                                    { links }
                                </ul>
                                {/*
                                <form class="navbar-form navbar-left" role="search">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search" />
                                    </div>
                                    <button type="submit" class="btn btn-default">Submit</button>
                                </form>*/}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}