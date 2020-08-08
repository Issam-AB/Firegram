import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAcPLQIW0zPLzfJ1UCCVEwwIL6t1WVrfZk",
    authDomain: "issam-firegram.firebaseapp.com",
    databaseURL: "https://issam-firegram.firebaseio.com",
    projectId: "issam-firegram",
    storageBucket: "issam-firegram.appspot.com",
    messagingSenderId: "120045636521",
    appId: "1:120045636521:web:eabbced90bb88be278d2b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore(); 
  const timestamp = firebase.firestore.FieldValue.serverTimestamp; 

  export { projectStorage, projectFirestore, timestamp };