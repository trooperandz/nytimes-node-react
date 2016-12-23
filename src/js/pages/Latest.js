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
        };

        this.subnavHeading = 'Latest News';

        this.subnavLinks = [
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
        ];
    }

    componentWillMount() {
        LatestStore.on('change', () => {
            this.setState({
                articles: LatestStore.getLatest(),
            });
        });
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

                <div class="row is-flex">{ArticleComponents}</div>
            </div>
        );
    }
}