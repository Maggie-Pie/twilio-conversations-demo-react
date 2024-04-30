// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaCQJCI_9p7rm2AtcGv-FwW3_Mm34pFNM",
  authDomain: "twilio-demo-app-de351.firebaseapp.com",
  projectId: "twilio-demo-app-de351",
  storageBucket: "twilio-demo-app-de351.appspot.com",
  messagingSenderId: "441517178400",
  appId: "1:441517178400:web:c4116fb9d624efae3a8645",
  measurementId: "G-J308VDS941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
