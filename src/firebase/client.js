import firebase from 'firebase/app';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAJpShuQMNvOwRsaTSnSkgBhI2B99-aGZo",
  authDomain: "test-lim.firebaseapp.com",
  projectId: "test-lim",
  storageBucket: "gs://test-lim.appspot.com",
  messagingSenderId: "914731159231",
  appId: "1:914731159231:web:bdd0178d473fbdc13ec00a"
})

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
