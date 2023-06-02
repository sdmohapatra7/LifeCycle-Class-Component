import React, { Component } from 'react'

export default class TimerOne extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
        console.log('TimerOne Constructor');
    }
    static getDerivedStateFromProps(){
        console.log('get derived state from props');
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        return true;
    }
    handleIncrease=()=>{
        this.setState((prevState)=>{
            return{
                count:prevState.count +1
            }
        })
    }
    render(){
        console.log('TimerOne Render');
        return(
            <>
            <h1>Counter</h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.handleIncrease}>Increase</button>
            </>
        )
    }
    componentDidMount(){
        console.log('ComponentDidMount');
        console.log('__________________________________');
    }
    getSnapshotBeforeUpdate(pervProps,prevState){
        console.log('getSnapSortBeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log('TimerOne ComponentDidUpdate');
        console.log('__________________________________');
    }
    
}
