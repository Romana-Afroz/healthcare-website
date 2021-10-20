import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  const registerWithEmailPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setEmail(email);
        setPassword(password);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInWithEmailPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    error,
    email,
    password,
    signInUsingGoogle,
    logOut,
    registerWithEmailPassword,
    signInWithEmailPassword,
  };
};

export default useFirebase;
