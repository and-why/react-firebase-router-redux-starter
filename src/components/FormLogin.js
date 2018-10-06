import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { login } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    login: uid => dispatch(login(uid)),
  };
};

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  _isMounted = false;
  onChange = e => {
    let prop = e.target.id;
    let value = e.target.value;
    this.setState({ [prop]: value });
  };
  onSubmitLogin = e => {
    e.preventDefault();

    auth
      .doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(e => {
        console.log(e);
        const uid = e.user.uid;
        this.props.login(uid);
        if (this._isMounted) {
          this.setState({
            email: '',
            password: '',
          });
        }
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const isInvalid = this.state.email === '' || this.state.password === '';

    return (
      <div className="page__login--form-wrapper">
        <form onSubmit={this.onSubmitLogin} className="page__login--form" autoComplete="off">
          <div className="page__login--inputs">
            <h2>Sign In</h2>
            <input
              autoComplete="off"
              value={this.state.email}
              type="text"
              id="email"
              onChange={this.onChange}
              placeholder="Email Address"
            />
            <input
              autoComplete="off"
              value={this.state.password}
              onChange={this.onChange}
              id="password"
              type="password"
              placeholder="Choose Password"
            />
            {this.state.error && <p>{this.state.error.message}</p>}
          </div>
          <button disabled={isInvalid} type="submit" className="btn btn--accept">
            Submit
          </button>
        </form>
        <button className="btn">
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(FormLogin);
