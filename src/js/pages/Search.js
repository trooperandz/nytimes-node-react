import React from 'react';
import { Link } from 'react-router';

import Article from '../components/Article';
import SubNav from '../components/SubNav';

import SearchActions from '../actions/SearchActions';
import SearchStore from '../stores/SearchStore';

export default class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            articles: [],
        }

        this.subnavHeading = 'News Search';

        this.subnavLinks = [];
    }

    render() {
        const { articles } = this.state;

        const ArticleComponents = articles.map((article) => {
            return <Article key={article.id} {...article}/>
        });

        const links = [];

        return(
            <div>
                <SubNav heading={this.subnavHeading} links={links} />
                {/*TODO: place in component
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar sub-nav">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <a class="navbar-brand" href="#">Latest News</a>
                                </div>
                                <div id="navbar" class={"navbar-collapse navbar-right "}>
                                    <ul class="nav navbar-nav">

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>*/}
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