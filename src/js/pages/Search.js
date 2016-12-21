import React from 'react';

import Article from '../components/Article';

export default class Search extends React.Component {
    render() {
        //const { article } = params;

        const Articles = [
            'God\'s Breath',
            'Article About Trains',
            'Greatness Of Thine Art',
            'They Worlds',
            'Century\'s Article',
            'Travel To They Ends',
            'It Is Time To Read',
            'Something Really Cool'
        ].map((title, i) => <Article key={i} title={title}/>);

        return(
            <div>
                <div class="row">
                    <div class="col-xs-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" id="search-container">
                        <label> <span class="glyphicon glyphicon-search"></span>
                            <input class="form-control" placeholder="Search for something interesting..." />
                        </label>
                    </div>
                </div>
                <h1>News Search</h1>
                <legend></legend>
                <div class="row">{Articles}</div>
            </div>
        );
    }
}