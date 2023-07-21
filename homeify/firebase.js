import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW5T8przfdWk-m5FiEFdm90b6lr6iUe9k",
  authDomain: "homeify-9240a.firebaseapp.com",
  projectId: "homeify-9240a",
  storageBucket: "homeify-9240a.appspot.com",
  messagingSenderId: "650023635489",
  appId: "1:650023635489:web:1f86e5231b7b57db287160",
  measurementId: "G-JXFN091LSC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };
