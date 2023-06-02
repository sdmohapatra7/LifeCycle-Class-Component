import React, { Component } from 'react'

class ComponentA extends Component {
    constructor(){
        super();
        this.state = {
            name:'ComponentA'
        }
        console.log('componentA constructor');
    }

    static getDerivedStateFromProps(){
        console.log('componentA getderivedfromprops');
        return null;
    }

    componentDidMount(){
        console.log('componemtA componentDidMount');
    }
    render() {
        console.log('componentA render');
        return (
            <h1>{this.state.name}</h1>
        )
    }
}

export default ComponentA;