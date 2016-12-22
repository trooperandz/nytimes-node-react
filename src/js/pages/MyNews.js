import React from 'react';

import Article from '../components/Article';
import ArticleStore from '../stores/ArticleStore';

export default class MyNews extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: ArticleStore.getAll(),
        };
    }

    render() {
        const { articles } = this.state;

        const ArticleComponents = articles.map((article) => {
            return <Article key={article.id} {...article}/>;
        });

        return(
            <div>
                <h1>My Saved News</h1>
                <legend></legend>
                <div class="row is-flex">{ArticleComponents}</div>
            </div>
        );
    }
}