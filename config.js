import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// var firebaseConfig = {
//   apiKey: "AIzaSyDLmnoBvnjOQ-AaJgDw1DnVBiTETbcp8LI",
//   authDomain: "the-net-ninja-sandbox.firebaseapp.com",
//   databaseURL: "https://the-net-ninja-sandbox.firebaseio.com",
//   projectId: "the-net-ninja-sandbox",
//   storageBucket: "the-net-ninja-sandbox.appspot.com",
//   messagingSenderId: "485942827092",
//   appId: "1:485942827092:web:1811d9d8f1f5fabcd5b5c1"
// };

var firebaseConfig = {
  apiKey: "AIzaSyAFBUC5oXmAgRLKlm-UcWLnDroJuADAB8I",
  authDomain: "firegram-db8df.firebaseapp.com",
  projectId: "firegram-db8df",
  storageBucket: "firegram-db8df.appspot.com",
  messagingSenderId: "2411541585",
  appId: "1:2411541585:web:150c52808ac21bee54b470"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };