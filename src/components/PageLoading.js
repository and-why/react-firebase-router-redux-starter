import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className="loader">
        <img className="loader__image" src="/images/loader.gif" />
      </div>
    );
  }
}
