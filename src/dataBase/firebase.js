import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCNBDLhM1dQ_xazDuxqMj6wJCsAUbq7Thw',
  authDomain: 'sponte-chellenge.firebaseapp.com',
  projectId: 'sponte-chellenge',
  storageBucket: 'sponte-chellenge.appspot.com',
  messagingSenderId: '571732822722',
  appId: '1:571732822722:web:89929ac11e770d4b88895b',
};
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
