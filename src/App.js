import { useState, useEffect } from 'react';

import Login from './components/Login';
import Home from './components/Home';
import firebase from './service/firebase';

import './App.css';



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      setUser(user);
    })
  }, [])

  console.log(user);

  return (
    <div className="app">
     {user ? <Home user={user}></Home> : <Login />}
    </div>
  );
}

export default App;