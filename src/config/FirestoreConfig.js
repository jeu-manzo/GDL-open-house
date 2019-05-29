import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firebase-firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCzGiHpoW5MYOq-dWH1IPM2XMW1R17FOzc",
  authDomain: "organa-fe1f2.firebaseapp.com",
  databaseURL: "https://organa-fe1f2.firebaseio.com",
  projectId: "organa-fe1f2",
  storageBucket: "organa-fe1f2.appspot.com",
  messagingSenderId: "539577824127",
  appId: "1:539577824127:web:54cde4175442c0b1"
});

let db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

export default db;
