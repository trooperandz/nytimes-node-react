import React from 'react';

import moment from 'moment';

export default class Article extends React.Component {
    render() {
        const { title, published_date, abstract, url } = this.props;

        let date = moment(new Date(published_date)).format('MM/DD/YYYY');

        return (
            <div class="col-md-4">
                <p class="text-info article-date">{date}</p>
                <h4>{title}</h4>
                <p>{abstract}</p>
                <a class="btn btn-default" href={url} target="_blank">More info...</a>
            </div>
        );
    }
}