import React from 'react';

import Article from '../components/Article';
import SearchActions from '../actions/SearchActions';
import SearchStore from '../stores/SearchStore';

export default class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            articles: [],
        }
    }

    render() {
        const { articles } = this.state;

        const ArticleComponents = articles.map((article) => {
            return <Article key={article.id} {...article}/>
        });

        return(
            <div>
                <h1>News Search</h1>
                <legend></legend>
                <div class="row">
                    <div class="col-xs-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" id="search-container">
                        <label> <span class="glyphicon glyphicon-search"></span>
                            <input class="form-control" placeholder="Search for something interesting..." />
                        </label>
                    </div>
                </div>
                <div class="row is-flex">{ArticleComponents}</div>
            </div>
        );
    }
}