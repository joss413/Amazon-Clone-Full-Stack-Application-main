
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import "firebase/compat/auth"
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCsRVTIoAyHg0hZ7JXYD-3dXuCryAe9d2U",
  authDomain: "clone-c3324.firebaseapp.com",
  projectId: "clone-c3324",
  storageBucket: "clone-c3324.appspot.com",
  messagingSenderId: "342969176939",
  appId: "1:342969176939:web:56eb77243a21507204f22e",
  measurementId: "G-S8SN0QZKMD"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = app.firestore();
export {auth, db};