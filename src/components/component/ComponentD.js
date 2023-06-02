import React, { Component } from 'react'

export default class componentD extends Component {
    constructor(){
        super();
        this.state = {
            name:'ComponentA',
            data:[]
        }
        console.log('componentD constructor');
        //setstate give the side-effect. so we can't update the state here
        // this.setState({
        //     name:'Shakti'
        // })
    }

    static getDerivedStateFromProps(){
        console.log('componentD getderivedfromprops');
        return null;
    }
    
    //we can handle all the sede-effect in componentDidMount method
    componentDidMount(){
        console.log('componemtD componentDidMount');
        // this.setState({
        //     name:' Component Power'
        // })
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({data}))
    }
    render() {
        console.log(this.state.data);
        return (
            <>
            <ol>
            {this.state.data.map((d)=>{
                return(
                    <>
                    <li key={d.id}><strong>Name:</strong>{d.name}</li>
                    <ul>
                    <li ><strong>Username:</strong>{d.username}</li>
                    <li ><strong>Email:</strong>{d.email}</li>
                    <li ><strong>Compant Name:</strong>{d.company.name}</li>
                    <li ><strong>Address:</strong>{d.address.city}</li>
                    </ul>
                    </>
                )
            })}
            </ol>
            
            </>
        )
    }
}
