import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
    constructor() {
        super();

        // Set initial state of navbar to collapsed
        this.state = {
            collapsed: true
        };
    }

    // Set state to opposite of whatever it currently is
    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;

        // Provide class names for active class instantiation
        const latestClass = location.pathname.match(/^\/latest/) ? 'active' : '';
        const mynewsClass = location.pathname.match(/^\/mynews/) ? 'active' : '';
        const searchClass = location.pathname === '/' ? 'active' : '';
        const settingsClass = location.pathname.match(/^\/settings/) ? 'active' : '';
        const navClass = collapsed ? 'collapse' : '';

        return (
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}     aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">ReactNews</a>
                    </div>
                    <div id="navbar" class={"navbar-collapse navbar-right " + navClass}>
                        <ul class="nav navbar-nav">
                            <li class={searchClass}>
                                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Search</IndexLink>
                            </li>
                            <li class={latestClass}>
                                <Link to="latest" onClick={this.toggleCollapse.bind(this)}>Latest</Link>
                            </li>
                            <li class={mynewsClass}>
                                <Link to="mynews" onClick={this.toggleCollapse.bind(this)}>My News</Link>
                            </li>
                            <li class={settingsClass}>
                                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}