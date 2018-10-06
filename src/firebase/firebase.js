import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const prodConfig = {};

const devConfig = {
  apiKey: 'AIzaSyAPzjzHSdGIiEpgt_cMHqdIBOf9g9axRKI',
  authDomain: 'smithflix-2018-dev.firebaseapp.com',
  databaseURL: 'https://smithflix-2018-dev.firebaseio.com',
  projectId: 'smithflix-2018-dev',
  storageBucket: 'smithflix-2018-dev.appspot.com',
  messagingSenderId: '839223576766',
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

export { auth, database, storage };
