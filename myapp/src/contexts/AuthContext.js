import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";

import "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // signup function

  async function signup(email, password, username) {
    const auth = getAuth();

    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;

    setCurrentUser({
      ...user,
    });
  }

  // signin function

  function signin(email, password) {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password);
  }

  // signout function

  function signout() {
    const auth = getAuth();
    return signOut(auth);
  }
  const value = {
    currentUser,
    signin,
    signup,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
