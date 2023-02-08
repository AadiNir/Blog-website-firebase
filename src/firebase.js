
  
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAN6qarrMnU5Mdum-LYHdu4v_Whwiw3l7g",
    authDomain: "premium-aloe-336510.firebaseapp.com",
    projectId: "premium-aloe-336510",
    storageBucket: "premium-aloe-336510.appspot.com",
    messagingSenderId: "829121611431",
    appId: "1:829121611431:web:d7a6b9069ef046dfb83d82",
    measurementId: "G-ZB33YGXT3L"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
