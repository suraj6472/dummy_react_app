import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzA3JwRvssITURsH6wLMLxpjamAFZuDxk",
  authDomain: "quiz-de129.firebaseapp.com",
  projectId: "quiz-de129",
  storageBucket: "quiz-de129.appspot.com",
  messagingSenderId: "421224080232",
  appId: "1:421224080232:web:1d25b0493fe3c568f9acdd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;