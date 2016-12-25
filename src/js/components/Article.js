import React from 'react';

export default class Article extends React.Component {
    render() {
        const { title, abstract, url } = this.props;

        return (
            <div class="col-md-4">
                <h4>{title}</h4>
                <p>{abstract}</p>
                <a class="btn btn-default" href={url}>More info...</a>
            </div>
        );
    }
}