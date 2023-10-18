// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD62gt-9xvD93hsLJnHOdPhEXFRzfZfNnI",
  authDomain: "coffee-shop-5d993.firebaseapp.com",
  projectId: "coffee-shop-5d993",
  storageBucket: "coffee-shop-5d993.appspot.com",
  messagingSenderId: "389846092291",
  appId: "1:389846092291:web:9495c292d094418db81c36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 export default auth;