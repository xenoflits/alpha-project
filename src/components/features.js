import React from 'react';

export default class Features extends React.Component {
    render() {
        return (
            <article className={this.props.classes}>
                <img src={require('../images/beach1.jpg')} alt="error"/>
                <p>text</p>
                
            </article>
        )
    }
}