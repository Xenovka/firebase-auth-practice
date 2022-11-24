import React, { useEffect, useState } from "react";
import { auth } from "./firebase/init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "testauth")
      .then((user) => console.log(user))
      .catch((err) => console.error(err));
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "testauth")
      .then((data) => {
        console.log(data);
        setUser(data.user);
      })
      .catch((err) => console.error(err));
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? "loading..." : user.email}
    </div>
  );
}

export default App;
