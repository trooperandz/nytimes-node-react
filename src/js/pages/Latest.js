import React from 'react';

import Article from '../components/Article';
import SubNav from '../components/SubNav';

import * as LatestActions from '../actions/LatestActions';
import LatestStore from '../stores/LatestStore';

export default class Latest extends React.Component {
    constructor() {
        super();
        this.getLatest = this.getLatest.bind(this);
        this.state = {
            articles: [],
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
       LatestStore.on('change', this.getLatest);
    }
    /*
    componentWillUnmount() {
        LatestStore.removeListener('change', this.getLatest);
        //LatestStore.removeListener('change');
    }*/

    getLatest() {
        this.setState({
            articles: LatestStore.getLatest(),
        });
    }

    getLatestBySection(ref, e) {
        e.preventDefault();
        LatestActions.getLatestBySection(ref);
    }

    render() {
        const { articles } = this.state;

        const ArticleComponents = articles.map((article, i) => {
            return <Article key={i} {...article} />;
        });

        const links = this.subnavLinks.map((link, i) => {
            let section = link.link;
            return <li key={i}> <a href="#" onClick={(e) => this.getLatestBySection(section, e)}>{link.title}</a> </li>;
        });

        return(
            <div>
                <SubNav heading={this.subnavHeading} links={links} />

                <div class="article row is-flex">{ArticleComponents}</div>
            </div>
        );
    }
}