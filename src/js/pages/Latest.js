import React from 'react';

import Article from '../components/Article';
import LatestActions from '../actions/LatestActions';
import ArticleStore from '../stores/ArticleStore';

export default class Latest extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: ArticleStore.getAll(),
        };
    }

    componentWillMount() {
        ArticleStore.on('change', () => {
            this.setState({
                articles: ArticleStore.getAll(),
            });
        });
    }

    render() {
        const { articles } = this.state;

        const ArticleComponents = articles.map((article) => {
            return <Article key={article.id} {...article}/>;
        });

        return(
            <div>
                <h1>Latest News</h1>
                <legend></legend>
                <div class="row is-flex">{ArticleComponents}</div>
            </div>
        );
    }
}