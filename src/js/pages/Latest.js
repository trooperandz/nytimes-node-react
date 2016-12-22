import React from 'react';
import { Link } from 'react-router';

import Article from '../components/Article';
import SubNav from '../components/SubNav';

import LatestActions from '../actions/LatestActions';
import LatestStore from '../stores/LatestStore';

export default class Latest extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: LatestStore.getLatest(),

            subnavLinks: [
                {
                    link: 'science',
                    title: 'Science',
                }, {
                    link: 'politics',
                    title: 'Politics',
                }, {
                    link: 'health',
                    title: 'Health',
                }, {
                    link: 'world',
                    title: 'World',
                }
            ],
        };
    }

    componentWillMount() {
        LatestStore.on('change', () => {
            this.setState({
                articles: LatestStore.getLatest(),
            });
        });
    }

    render() {
        const { articles, subnavLinks } = this.state;

        const ArticleComponents = articles.map((article) => {
            return <Article key={article.id} {...article}/>;
        });

        const subnavHeading = 'Latest News';

        const links = subnavLinks.map((link) => {
            return <li><Link to={link.link}> {link.title} </Link></li>;
        });

        return(
            <div>
                <SubNav heading={subnavHeading} links={links} />
            {/* OLD COMPONENT
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar sub-nav">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <a class="navbar-brand" href="#">Latest News</a>
                                </div>
                                <div id="navbar" class={"navbar-collapse navbar-right "}>
                                    <ul class="nav navbar-nav">
                                        <li>
                                            <Link to="">Science</Link>
                                        </li>
                                        <li>
                                            <Link to="">Politics</Link>
                                        </li>
                                        <li>
                                            <Link to="">Health</Link>
                                        </li>
                                        <li>
                                            <Link to="">World</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div> */}
                <div class="row is-flex">{ArticleComponents}</div>
            </div>
        );
    }
}