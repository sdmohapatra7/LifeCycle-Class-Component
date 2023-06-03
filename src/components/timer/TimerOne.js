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
        console.log(this.state.time);
        console.log('nextProps',nextProps);
        console.log('nextState',nextState);
        return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0 ;
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
        // this.timer = setInterval(()=>{
        //     this.setState((prevState)=>({time:prevState.time+1}))
        // },1000)
    }
    getSnapshotBeforeUpdate(pervProps,prevState){
        console.log('getSnapSortBeforeUpdate');
        return null;
    }
    componentDidUpdate(pervProps,prevState,snapShot){
        console.log('TimerOne ComponentDidUpdate');
        console.log('__________________________________');
        // if(this.state.time===30){
        //     clearInterval(this.timer);
        // }
        // console.log('prevProps',pervProps);
        // console.log('prevState',prevState);
        // console.log('getSnapShotBeforeUpdate',snapShot);
        if(pervProps.timerOn !== this.props.timerOn){
            if(this.props.timerOn){
                this.timer = setInterval(()=>{
                    this.setState((prevState)=>({time:prevState.time+1}))
                },1000)
            }else{
                clearInterval(this.timer);
            }
        }
        
    }
    componentWillUnmount(){
        console.log('TimerOne ComponentWillUnmount');
        clearInterval(this.timer);
    }
    
}
