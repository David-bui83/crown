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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;