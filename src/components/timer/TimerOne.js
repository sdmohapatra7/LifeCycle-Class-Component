import React, { Component } from 'react'

export default class TimerOne extends Component {
    constructor(){
        super();
        this.state={
            time:0
        }
        this.timer =null;
        console.log('TimerOne Constructor');
    }
    static getDerivedStateFromProps(){
        console.log('get derived state from props');
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        return true;
    }
    // handleIncrease=()=>{
    //     this.setState((prevState)=>{
    //         return{
    //             count:prevState.count +1
    //         }
    //     })
    // }
    render(){
        console.log('TimerOne Render');
        return(
            <>
            {/* <h1>Counter</h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.handleIncrease}>Increase</button> */}
            <h1>Time Spent: {new Date (this.state.time *1000).toISOString().slice(11,19)}</h1>

            </>
        )
    }
    componentDidMount(){
        console.log('ComponentDidMount');
        console.log('__________________________________');
        this.timer = setInterval(()=>{
            this.setState((prevState)=>({time:prevState.time+1}))
        },1000)
    }
    getSnapshotBeforeUpdate(pervProps,prevState){
        console.log('getSnapSortBeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log('TimerOne ComponentDidUpdate');
        console.log('__________________________________');
        if(this.state.time===30){
            clearInterval(this.timer);
        }
    }
    componentWillUnmount(){
        console.log('TimerOne ComponentWillUnmount');
    }
    
}
