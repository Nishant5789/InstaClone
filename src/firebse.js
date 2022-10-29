import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"; 
import {getAuth} from "firebase/auth"; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVuDnaEUMTlWo5gc9h7Vvkq5bMFMJ4WMI",
  authDomain: "instagram-ytclone.firebaseapp.com",
  projectId: "instagram-ytclone",
  storageBucket: "instagram-ytclone.appspot.com",
  messagingSenderId: "190360606908",
  appId: "1:190360606908:web:7fb615a027611ed83f58b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};
