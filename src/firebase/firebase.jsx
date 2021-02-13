import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCfyJTseYddNANL3ZTuvV0TyXgcPI6GnGQ",
    authDomain: "fs-c9c42.firebaseapp.com",
    projectId: "fs-c9c42",
    storageBucket: "fs-c9c42.appspot.com",
    messagingSenderId: "909110804761",
    appId: "1:909110804761:web:cef314125b8d20d774c588"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
    db,
    auth
};
