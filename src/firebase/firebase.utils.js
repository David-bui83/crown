import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBGB9ZSyIqbjX-280msWHaqUo2QUDEIptM",
  authDomain: "crowndb-pro.firebaseapp.com",
  databaseURL: "https://crowndb-pro.firebaseio.com",
  projectId: "crowndb-pro",
  storageBucket: "crowndb-pro.appspot.com",
  messagingSenderId: "431102088526",
  appId: "1:431102088526:web:fd32cdd77d14df84dcba1f",
  measurementId: "G-4V8TMDTVZ5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fbase = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;