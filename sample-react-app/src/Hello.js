import React, { Component } from 'react';
import logo from './logo.svg';
import './Hello.css';

export class Hello extends Component {
  constructor(props) {
    super()
    this.state = {
      BARTstatus: 'ok',
      isOnTime: true
    }
  }
  handleClick(e){
    if(this.state.isOnTime) {
      this.setState({
        BARTstatus: 'super delayed',
        isOnTime: false
      })
    } else {
      this.setState({
        BARTstatus: 'ok',
        isOnTime: true
      });
    }
  }
  render() {
    return (
      <div>
      <h1 className="big-header">Hello {this.props.name}</h1>
      <p>I like the color {this.props.favColor}</p>
      <p>The the BART is: {this.state.BARTstatus}</p>
      <button onClick = {(e)=> this.handleClick(e)}>DELAY THE BART</button>
    </div>
    );
  }
}

export default Hello;
