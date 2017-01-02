import React from 'react';
import { Link } from 'react-router';

import SubNav from '../components/SubNav';

export default class Settings extends React.Component {
    constructor() {
        super();

        this.subnavHeading ='My Settings';

        this.subnavLinks = [
            {
                link: 'myAccount',
                title: 'My Account',
            }, {
                link: 'myProfile',
                title: 'My Profile',
            }, {
                link: 'myCategories',
                title: 'My Categories',
            }
        ];
    }
    render() {
        const links = this.subnavLinks.map((link, i) => {
            return <li key={i}> <Link to={link.link}>{link.title}</Link> </li>;
        });

        return(
            <div>
                <SubNav heading={this.subnavHeading} links={links} />

                <div class="row">
                    <div class="col-lg-12">
                        <p>This is where your settings will soon live...</p>
                    </div>
                </div>
            </div>
        );
    }
}