import React from 'react';

import Article from '../components/Article';
import MyNewsActions from '../actions/MyNewsActions';
import MyNewsStore from '../stores/MyNewsStore';

export default class MyNews extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: MyNewsStore.getFavorites(),
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