import React from 'react';

import Article from '../components/Article';

export default class MyNews extends React.Component {
    render() {
        //const { article } = params;

        const Articles = [
            'Article About Tesla',
            'A Cool Article',
            'They B\'s Be Travellin\'',
            'Article Of Greatness',
            'Article Of They Worlds',
            'It Is Time To Read',
            'Something Really Cool',
            'Century\'s Article',
        ].map((title, i) => <Article key={i} title={title}/>);

        return(
            <div>
                <h1>My Saved News</h1>
                <legend></legend>
                <div class="row">{Articles}</div>
            </div>
        );
    }
}