import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './ticTacToe'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>first react-demo</p>
      </header>
      <Game />
    </div>
  );
}

export default App;
