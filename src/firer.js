import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDG0MVqFLT3EV_vqXfxt4kWR0M-kxMAvGA",
    authDomain: "login-22a3a.firebaseapp.com",
    projectId: "login-22a3a",
    storageBucket: "login-22a3a.appspot.com",
    messagingSenderId: "646466809598",
    appId: "1:646466809598:web:49cc02c73250761c897faf",
    measurementId: "G-9PHTDJJQYP"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;