import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7stqcqKRgt9DQjlPX3XA1Wjbn9lnUlDs",
  authDomain: "react-with-redux-firebase.firebaseapp.com",
  projectId: "react-with-redux-firebase",
  storageBucket: "react-with-redux-firebase.appspot.com",
  messagingSenderId: "297181821966",
  appId: "1:297181821966:web:84b414b0051c14dd9a505f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
