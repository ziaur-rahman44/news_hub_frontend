// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyCVQ1pBcuRuIDtv-dCS9xJYnKOdFZ_OWHY" ,
  authDomain:"honest-news-hub.firebaseapp.com" ,
  projectId:"honest-news-hub" ,
  storageBucket:"honest-news-hub.appspot.com" ,
  messagingSenderId:"459725827221" ,
  appId:"1:459725827221:web:f1ef01cd90cab5eaf8ff9c" ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;