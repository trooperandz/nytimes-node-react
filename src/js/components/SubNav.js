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
                            </div>
                            <div id="navbar" class={"navbar-collapse navbar-right "}>
                                <ul class="nav navbar-nav">
                                    { links }
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}