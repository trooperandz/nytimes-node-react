import React from 'react';

import moment from 'moment';

export default class Article extends React.Component {
    render() {
        const { title, published_date, abstract, url } = this.props;

        let date = (published_date != 'Unavailable Date') ? moment(new Date(published_date)).format('MM/DD/YYYY') : published_date;

        return (
            <div class="col-md-4">
                <h4>{title}</h4>
                <p class="article-date">{date}</p>
                <p>{abstract}</p>
                <a class="btn btn-default text-info" href={url} target="_blank">More info...</a>
            </div>
        );
    }
}