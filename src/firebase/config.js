import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgB5Ju1qGjr5whEg1nvmgu7L2Hsb1UGfc",
  authDomain: "olx-react-d3137.firebaseapp.com",
  projectId: "olx-react-d3137",
  storageBucket: "olx-react-d3137.appspot.com",
  messagingSenderId: "143402505953",
  appId: "1:143402505953:web:96fdd36ca666ee1b3809a0",
  measurementId: "G-9Q2NKNKG7Z"
};

export default firebase.initializeApp(firebaseConfig)