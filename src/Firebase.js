import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXGviRj0dMXjOZjcu7FLQ-1Ng9213KWB8",
  authDomain: "react-http-7141c.firebaseapp.com",
  databaseURL: "https://react-http-7141c-default-rtdb.firebaseio.com",
  projectId: "react-http-7141c",
  storageBucket: "react-http-7141c.appspot.com",
  messagingSenderId: "988422258451",
  appId: "1:988422258451:web:b5505571a619af44aae4e6",
  measurementId: "G-JGCWG0W305"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };