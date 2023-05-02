import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCn5y1kECpeIlveesaCkBDceXrae6e1gWw",
  authDomain: "gulabvadi-4169a.firebaseapp.com",
  databaseURL: "https://gulabvadi-4169a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gulabvadi-4169a",
  storageBucket: "gulabvadi-4169a.appspot.com",
  messagingSenderId: "658632663040",
  appId: "1:658632663040:web:70ab5e8ea7477f698af8e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const dataref = firebase.database();
export const storage = firebase.storage();
export default firebase