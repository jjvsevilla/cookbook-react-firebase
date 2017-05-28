import React, { Component } from 'react';
import reactLogo from './images/react.svg';
import firebaseLogo from './images/firebase.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ reactLogo } className="App-logo" alt="logo" />
          &nbsp;
          <img src={ firebaseLogo } className="App-logo-no-animation" alt="logo" />
          <h2>Welcome to React + Firebase</h2>
        </div>
        <p className="App-intro">
          <span>Getting real time data from Firebase</span>
          <br/>
          <span>current speed: { this.state.speed }</span>
        </p>
      </div>
    );
  }
}

export default App;
