import React from 'react';

import Article from '../components/Article';
import ArticleStore from '../stores/ArticleStore';

export default class Latest extends React.Component {
    /*
    constructor() {
        super();
        this.state = {
            articles: ArticleStore.getAll(),
        }
    }*/
    render() {
        /*
        const { articles } = this.state;

        const ArticleComponents = articles.map((article) => {
            return <Article key={article.id}
        });*/

        const Articles = [
            'A Cool Article',
            'Article About Tesla',
            'Article Of Greatness',
            'Article Of They Worlds',
            'Century\'s Article',
            'They B\'s Be Travellin\'',
            'It Is Time To Read',
            'Something Really Cool'
        ].map( (title, i) => <Article key={i} title={title}/> );

        return(
            <div>
                <h1>Latest News</h1>
                <legend></legend>
                <div class="row">{Articles}</div>
            </div>
        );
    }
}