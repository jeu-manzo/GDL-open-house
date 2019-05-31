import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCzGiHpoW5MYOq-dWH1IPM2XMW1R17FOzc",
  authDomain: "organa-fe1f2.firebaseapp.com",
  databaseURL: "https://organa-fe1f2.firebaseio.com",
  projectId: "organa-fe1f2",
  storageBucket: "organa-fe1f2.appspot.com",
  messagingSenderId: "539577824127",
  appId: "1:539577824127:web:54cde4175442c0b1"
};

const fireBase = firebase.initializeApp(firebaseConfig);

export default fireBase;
