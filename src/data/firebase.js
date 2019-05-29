import Firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBxrRzRBnevYSK6Oh1n3TKC1Soz0J3HB28",
    authDomain: "organa-be31e.firebaseapp.com",
    databaseURL: "https://organa-be31e.firebaseio.com",
    projectId: "organa-be31e",
    storageBucket: "organa-be31e.appspot.com",
    messagingSenderId: "675277598444",
    appId: "1:675277598444:web:9a5664be21286de9"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);