import React, { Component } from 'react'
import logo from './logo.svg';
import './Header.css';
import { browserHistory } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <div>
        <button onClick={() => browserHistory.push('/')}>HOME</button>
        <button onClick={() => browserHistory.push('/other')}>OTHER</button>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React Redux</h2>
          </div>
        </div>
      </div>
    )
  }
}
