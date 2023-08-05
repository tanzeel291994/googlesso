import { useState, useEffect } from 'react';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import firebase from './service/firebase';

import './App.css';



function App() {
  const [user, setUser] = useState(null);
  const [isNewUser,setNewUser] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        // User is signed in
        if (user.metadata.creationTime === user.metadata.lastSignInTime) {          
          setNewUser(true);
          console.log("User is signing in for the first time.");
        } else {
          setNewUser(false);
          console.log("User is signing in again.");
        }
      } else {
        setUser(null);
        console.log("User is not signed in.");
      }
    })
  }, [])

  return (
    <div className="app">
     {user ? (isNewUser ?<Register user={user}></Register> : <Home user={user}></Home> ): <Login />}
    </div>
  );
}

export default App;