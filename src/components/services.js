import React from 'react';

export default class Services extends React.Component {
    render() {
        return (
            <div id="services">
                <p id="service-text">text</p>
                <img id="service-img" src={require('../images/beach2.jpg')} alt="error" />
            </div>
        )
    }
}