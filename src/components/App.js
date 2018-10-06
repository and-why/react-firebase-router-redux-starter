import React, { Component } from 'react';
import AppRouter from '../routers/AppRouter';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppRouter />
      </div>
    );
  }
}

export default App;
