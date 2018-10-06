import { firebase } from '../firebase';

export const addMovie = movie => ({
  type: 'ADD_MOVIE',
  payload: movie,
});

export const login = uid => ({
  type: 'LOGIN',
  uid,
});
export const logout = () => ({
  type: 'LOGOUT',
});

export const authUser = uid => ({
  type: 'AUTH_USER',
  uid,
});
