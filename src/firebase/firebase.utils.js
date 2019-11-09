import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAL_7CGinBFwm0Mb-4Y4LvhHad7r5pzVf0",
    authDomain: "shop-db-e303f.firebaseapp.com",
    databaseURL: "https://shop-db-e303f.firebaseio.com",
    projectId: "shop-db-e303f",
    storageBucket: "shop-db-e303f.appspot.com",
    messagingSenderId: "129581126015",
    appId: "1:129581126015:web:049a4dd905aca4d9640a4a",
    measurementId: "G-V0GY2N5BVY"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
