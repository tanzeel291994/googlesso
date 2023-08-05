import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBBjRwknv561NZ-GmMYeHCQHYKPx4JEOuk",
  authDomain: "apt-amplifier-234811.firebaseapp.com",
  projectId: "XXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

/// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const provider1 = new firebase.auth.FacebookAuthProvider(); 
provider1.setCustomParameters({ prompt: 'select_account' });


const provider3 = new firebase.auth.OAuthProvider("microsoft.com"); 
provider1.setCustomParameters({  prompt: 'select_account',tenant:"https://login.microsoftonline.com/e9f80549-c45b-41e7-8f8b-9802877ce4d3" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithFaceBook = () => auth.signInWithPopup(provider1);
export const signInWithMicrosoft = () => auth.signInWithPopup(provider3);

export default firebase;