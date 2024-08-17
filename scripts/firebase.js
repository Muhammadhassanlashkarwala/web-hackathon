
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDn0FZbReeskzTU9lEzKDSYtbiGPQSkkXw",
    authDomain: "blog-project-736c7.firebaseapp.com",
    projectId: "blog-project-736c7",
    storageBucket: "blog-project-736c7.appspot.com",
    messagingSenderId: "87715537583",
    appId: "1:87715537583:web:7faa4c1b3c7838583f6a5a",
    measurementId: "G-VNCH36SCFX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  export{
    app, 
    analytics,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  }