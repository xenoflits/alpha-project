import React from 'react'

export default class Navigation extends React.Component {
    render() {
        return (<nav id="home"className="navigation">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
        </nav>)
    }
}