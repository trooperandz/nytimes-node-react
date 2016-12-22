import React from 'react';

export default class Article extends React.Component {
    render() {
        const { heading, summary, link } = this.props;

        return (
            <div class="col-md-4">
                <h4>{heading}</h4>
                <p>{summary}</p>
                <a class="btn btn-default" href={link}>More info...</a>
            </div>
        );
    }
}