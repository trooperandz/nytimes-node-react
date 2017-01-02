import React from 'react';
import { Link } from 'react-router';

import Article from '../components/Article';
import SubNav from '../components/SubNav';

import * as SearchActions from '../actions/SearchActions';
import SearchStore from '../stores/SearchStore';

export default class Search extends React.Component {
    constructor() {
        super();
        this.getLatest = this.getLatest.bind(this);

        this.state = {
            articles: [],
            value: '',
        }

        this.handleChange = this.handleChange.bind(this);

        this.getSearchResults = this.getSearchResults.bind(this);

        this.subnavHeading = 'News Search';

        this.subnavLinks = [];
    }

    componentWillMount() {
        SearchStore.on('change', this.getLatest);
    }

    getLatest() {
        this.setState({
            articles: SearchStore.getLatest(),
        })
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
        console.log('value state: ' + this.state.value);
    }

    getSearchResults(e) {
        e.preventDefault();
        SearchActions.newsSearch(this.state.value);
    }

    render() {
        const { articles } = this.state;

        const ArticleComponents = articles.map((article, i) => {
            return <Article key={i} {...article} />;
        });

        const links = [];

        return(
            <div>
                <SubNav heading={this.subnavHeading} links={links} />

                <div class="row">
                    <div class="col-xs-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" id="search-container">
                        <label> <span class="glyphicon glyphicon-search"></span>
                            <input class="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Search for something interesting..." />
                            <span class="text-info" id="search-btn" onClick={e => this.getSearchResults(e)}>Go&nbsp;&raquo;</span>
                        </label>
                    </div>
                </div>

                <div class="article row is-flex">{ArticleComponents}</div>
            </div>
        );
    }
}