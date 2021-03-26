import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCoy9JYQXw5OAay9d7uezesLBSQzKNiCW0",
    authDomain: "book-santa-app-92671.firebaseapp.com",
    projectId: "book-santa-app-92671",
    storageBucket: "book-santa-app-92671.appspot.com",
    messagingSenderId: "23927733558",
    appId: "1:23927733558:web:5f0de10ba6d320357c0797"
 
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();