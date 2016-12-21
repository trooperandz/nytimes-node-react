import React from 'react';

export default class Article extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <div class="col-md-4">
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit amet, suspendisse sociosqu lobortis, nec vestibulum, sem pede purus ac consectetuer pulvinar, eleifend turpis dolor enim ipsum ut porta. Sit ex vitae gravida, lacinia sed duis mollis optio pharetra vivamus.</p>
                <a class="btn btn-default" href="#">More info...</a>
            </div>
        );
    }
}