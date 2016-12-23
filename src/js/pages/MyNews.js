import React from 'react';
import { Link } from 'react-router';

import Article from '../components/Article';
import SubNav from '../components/SubNav';

import MyNewsActions from '../actions/MyNewsActions';
import MyNewsStore from '../stores/MyNewsStore';

export default class MyNews extends React.Component {
    constructor() {
        super();

        this.state = {
            articles: MyNewsStore.getFavorites(),
        };

        this.subnavHeading = 'My Saved News';

        this.subnavLinks = [
            {
                link: 'myScience',
                title: 'My Science',
            }, {
                link: 'myPolitics',
                title: 'My Politics',
            }
        ];
    }

    render() {
        const { articles } = this.state;

        const ArticleComponents = articles.map((article) => {
            return <Article key={article.id} {...article}/>;
        });

        const links = this.subnavLinks.map((link, i) => {
            return <li key={i}> <Link to={link.link}>{link.title}</Link> </li>;
        });

        return(
            <div>
                <SubNav heading={this.subnavHeading} links={links} />
                {/*TODO: place in component
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar sub-nav">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <a class="navbar-brand" href="#">My Saved News</a>
                                </div>
                                <div id="navbar" class={"navbar-collapse navbar-right "}>
                                    <ul class="nav navbar-nav">
                                        <li>
                                            <Link to="">Custom Cat</Link>
                                        </li>
                                        <li>
                                            <Link to="">Custom Cat</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>*/}
                <div class="row is-flex">{ArticleComponents}</div>
            </div>
        );
    }
}