import React, { Component } from 'react';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import '../styles/App.css';

import { logout } from '../actions';

// import MovieList from './MovieList';
// import Form from './Form';

export class App extends Component {
  constructor() {
    super();

    this.onLogout = this.onLogout.bind(this);
  }
  onLogout() {
    auth.doSignOut();
    this.props.logout();
  }
  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.onLogout}>
          LOGOUT
        </button>
        <h1>APP TITLE</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
