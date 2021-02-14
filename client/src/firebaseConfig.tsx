import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD238aFgjL8F3F1NqetzKRpwtEJZ8puKEA',
  authDomain: 'drop-it-1700b.firebaseapp.com',
  projectId: 'drop-it-1700b',
  storageBucket: 'drop-it-1700b.appspot.com',
  messagingSenderId: '504997744149',
  appId: '1:504997744149:web:6217bffab264486012881c',
  measurementId: 'G-3YCYKXDD0Y',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
