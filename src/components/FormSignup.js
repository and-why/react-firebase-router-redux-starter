import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../firebase';

import { login } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    login: uid => dispatch(login(uid)),
  };
};

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

export class FormSignup extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  _isMounted = false;
  onSubmit = e => {
    e.preventDefault();
    const { email, passwordOne } = this.state;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(e => {
        console.log(e);
        const uid = e.user.uid;
        this.props.login(uid);
        if (this._isMounted) {
          this.setState({ ...INITIAL_STATE });
        }
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
  };
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '';

    return (
      <div className="page__login--form-wrapper">
        <form onSubmit={this.onSubmit} className="page__login--form" autoComplete="off">
          <div className="page__login--inputs">
            <h2>Sign up for an Account</h2>
            <input
              id="form__signup--email"
              value={email}
              type="text"
              onChange={e => this.setState(byPropKey('email', e.target.value))}
              placeholder="Email Address"
              autoComplete="false"
            />
            <input
              id="form__signup--password"
              value={passwordOne}
              onChange={e => this.setState(byPropKey('passwordOne', e.target.value))}
              type="password"
              placeholder="Choose Password"
            />
            <input
              value={passwordTwo}
              onChange={e => this.setState(byPropKey('passwordTwo', e.target.value))}
              type="password"
              placeholder="Confirm Password"
            />
            {error && <p>{error.message}</p>}
          </div>
          <button disabled={isInvalid} type="submit" className="btn btn--accept">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(FormSignup);
