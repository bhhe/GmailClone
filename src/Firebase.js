import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "reactprojcs.firebaseapp.com",
    projectId: "reactprojcs",
    storageBucket: "reactprojcs.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };