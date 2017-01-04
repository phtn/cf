import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import '../public/micon/css/micon.min.css'

function LOG(payload) {
  console.log(payload)
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      P1_HP: 3,
      P2_HP: 3,
      p1Status: false,
      p2Status: false,
      resetStatus: 'hidden',
      winner: 'Player 3 wins!',
      winStatus: 'hidden'
    }
  }
   handleClick(state, p){
    switch(p){
      case 1: {
        if (state > 1){
          this.setState({P2_HP: state - 1}, function() {LOG(state)})
        
        } else {
          this.setState({P2_HP: 0})
          this.setState({p2Status: true})
          this.setState({resetStatus: 'visible'})
          this.setState({winStatus: 'visible'})
          this.setState({winner: 'Player 1 wins!'})
        }
      }
      break

      case 2: {
        if (state > 1){
          this.setState({P1_HP: state - 1})
        //LOG(this[state[hp]])  
        } else {
          this.setState({P1_HP: 0}, ()=> {
            this.setState({p1Status: true})
            this.setState({resetStatus: 'visible'})  
            this.setState({winStatus: 'visible'})
            this.setState({winner: 'Player 2 wins!'})
          })
        }
      }
      break
      default: LOG(this.state.resetStatus)

    }
    
  }
  
  handleReset() {
    this.setState({resetStatus: 'hidden'})
    this.setState({P1_HP: 3})
    this.setState({P2_HP: 3})
    this.setState({p1Status: false})
    this.setState({p2Status: false})
    this.setState({winStatus: 'hidden'})
  }
  render() {
    return (
      <div className="App">
        <div className="winner" style={{visibility: this.state.winStatus}}>{this.state.winner}</div>
        <div className="arena">
        <button onClick={()=>this.handleClick(this.state.P2_HP, 1)} disabled={this.state.p1Status}>
            <span className="mi-stack mi-lg">
              <i className="mi mi-Drop mi-3x"></i>
              {this.state.P1_HP}
            </span>
          </button>
        <hr/>
        <button onClick={()=>this.handleClick(this.state.P1_HP, 2)} disabled={this.state.p2Status}>Player 2 : {this.state.P2_HP}</button>
        </div>
        <div className="menu">
          <button onClick={()=> this.handleReset()} style={{visibility: this.state.resetStatus}}>RESTART GAME</button>
        </div>
      </div>
    );
  }
}

export default App;
