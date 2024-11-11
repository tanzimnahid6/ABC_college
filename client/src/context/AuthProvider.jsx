/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
const provider = new GoogleAuthProvider();

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //create user with email password
  const createUser = (email, password, name, address, subject, university, phone, dob) => {
    setLoading(true);
    fetch(" https://abc-college-backend-76ka.vercel.app/api/users/createUser",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({email, password, name, address, subject, university, phone, dob})
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

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

  //forgot password and send email to reset password
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
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
    forgotPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
