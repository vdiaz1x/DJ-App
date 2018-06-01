// importing firebase
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBgwJPNbc-saEQP3rkMy1gyIDZMuuG-pMM',
  authDomain: 'dj-app-local.firebaseapp.com',
  databaseURL: 'https://dj-app-local.firebaseio.com',
  projectId: 'dj-app-local',
  storageBucket: '',
  messagingSenderId: '754269397104',
};

// initializing firebase
firebase.initializeApp(config);
// setting up firebase authentification
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
// initializing firebase auth
export const db = firebase.database();

// sending out firebase
export default firebase;
