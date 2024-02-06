import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCd4-gbd9dO_NtuccLFQf_VM8zZlml6wE0",
  authDomain: "ecopulse-carbon-footprint.firebaseapp.com",
  projectId: "ecopulse-carbon-footprint",
  storageBucket: "ecopulse-carbon-footprint.appspot.com",
  messagingSenderId: "314055537259",
  appId: "1:314055537259:web:0c578a9213aa32a989772e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };