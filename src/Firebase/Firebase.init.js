// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOWa9f9XnDtSkhqXFWfOfvU21_cClHTlQ",
    authDomain: "fitness-house-2e9fe.firebaseapp.com",
    projectId: "fitness-house-2e9fe",
    storageBucket: "fitness-house-2e9fe.appspot.com",
    messagingSenderId: "232765208817",
    appId: "1:232765208817:web:08bd6707fc0c4599db9150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;