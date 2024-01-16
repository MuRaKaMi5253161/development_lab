import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATAnyJqPNeCPAQBjTr-B18cNSDFgqGjFs",
  authDomain: "development-lab-adb4b.firebaseapp.com",
  projectId: "development-lab-adb4b",
  storageBucket: "development-lab-adb4b.appspot.com",
  messagingSenderId: "247465444156",
  appId: "1:247465444156:web:8e1c284baef76cf9bcd439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;