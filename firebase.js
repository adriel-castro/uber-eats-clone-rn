import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAliAuzzF47laMq2jUlVbfeYSjydZPAavo",
  authDomain: "rn-uber-eats-clone-58454.firebaseapp.com",
  projectId: "rn-uber-eats-clone-58454",
  storageBucket: "rn-uber-eats-clone-58454.appspot.com",
  messagingSenderId: "972337580199",
  appId: "1:972337580199:web:3364a0dc30fe77855f3382",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export { firebase };
