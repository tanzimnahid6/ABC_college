/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
 
} from "firebase/auth";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
const provider = new GoogleAuthProvider();

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);


  //create user with email password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login with email and password
  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //login with google=======================
  const googlLogin = () => {
    return signInWithPopup(auth, provider);
  };
  //user signOut========
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  //ON AUTH STATE CHANGE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    setUser,
    loginWithEmail,
    loading,
    setLoading,
    logout,
    googlLogin,
    
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
