import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "",
    authDomain: "u-and-i-cfg.firebaseapp.com",
    databaseURL: "https://u-and-i-cfg.firebaseio.com",
    projectId: "u-and-i-cfg",
    storageBucket: "u-and-i-cfg.appspot.com",
    messagingSenderId: "834989589049",
    appId: "1:834989589049:web:3bac3ad26e30bdd288c3e8",
    measurementId: "G-SEZCF7HLXZ"
  };

const  firebaseApp = firebase.initializeApp(firebaseConfig);
const db  = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
export {db, auth, storage, firebaseApp};