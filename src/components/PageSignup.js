import React, { Component } from 'react';

import FormSignup from './FormSignup';

export default class PageSignup extends Component {
  render() {
    return (
      <div className="page__file-uplaod">
        <h1>Sign Up</h1>
        <FormSignup />
      </div>
    );
  }
}
