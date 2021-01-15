import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCNlto5VnIUTvuzbM1eyMhdpEm_HmFJt1s",
    authDomain: "rremember-list.firebaseapp.com",
    projectId: "rremember-list",
    storageBucket: "rremember-list.appspot.com",
    messagingSenderId: "1052083113907",
    appId: "1:1052083113907:web:4e1add68b98ca8610b85c6",
    measurementId: "G-G6B386VHH8"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export { db };