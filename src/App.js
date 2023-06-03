import React from 'react';
import TimerOne from './components/timer/TimerOne';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      timerOn:false
    }
  }
  handleTimerOn=()=>{
    this.setState((prevState)=>({timerOn:!prevState.timerOn}))
  }
  render(){
    return (
      <>
      {/* <button onClick={this.handleMount}>{this.state.mount?'Un-Mount':'Mount'}</button>
      {this.state.mount?<TimerOne />:null} */}
      <TimerOne timerOn={this.state.timerOn}/>
      <button onClick={this.handleTimerOn}>{this.state.timerOn?'STOP':'START'}</button>
      </>
    );
  }
  
}

export default App;
