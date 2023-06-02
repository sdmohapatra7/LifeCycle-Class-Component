import React, { Component } from 'react'
import ComponentD from './ComponentD';

class ComponentA extends Component {
    constructor(){
        super();
        this.state = {
            name:'ComponentA'
        }
        console.log('componentA constructor');
        //setstate give the side-effect. so we can't update the state here
        // this.setState({
        //     name:'Shakti'
        // })
    }

    static getDerivedStateFromProps(){
        console.log('componentA getderivedfromprops');
        return null;
    }
    
    //we can handle all the sede-effect in componentDidMount method
    componentDidMount(){
        console.log('componemtA componentDidMount');
        // this.setState({
        //     name:' Component Shakti'
        // })
    }
    render() {
        console.log('componentA render');
        // this.setState({
        //     name:'Shakti'
        // })
        return (<>
t            <ComponentD />
            </>
        )
    }
}

export default ComponentA;