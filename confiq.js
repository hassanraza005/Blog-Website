
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDDscc9tmTvdwra__Mh9L6X0iXrG5FgLqg",
  authDomain: "blog-website-hassan.firebaseapp.com",
  projectId: "blog-website-hassan",
  storageBucket: "blog-website-hassan.appspot.com",
  messagingSenderId: "243821902258",
  appId: "1:243821902258:web:4001346a94c30817c6ccab",
  measurementId: "G-H25K0L43XX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);