import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isAuth: !!state.uid,
});

const ConnectedPrivateRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route {...rest} component={props => (isAuth ? <Component {...props} /> : <Redirect to="/" />)} />
);

const PrivateRoute = connect(mapStateToProps)(ConnectedPrivateRoute);

export default PrivateRoute;
