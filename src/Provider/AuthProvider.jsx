import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
// import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // update user information
  const updateUserProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // Log in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const changePassword = (newPassword) => {
    setLoading(true)
    return updatePassword(user, newPassword)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // get and set token
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
      const userData = { email: currentUser?.email }
      if (currentUser) {
        axios.post('https://planet-shoes-server.onrender.com/jwt', userData)
          .then(data => {
            localStorage.setItem('access-token', data.data.token);
            setLoading(false);
          })
          .catch(error => {
            console.error('Failed to get JWT token:', error);
            setLoading(false);
          });
      } else {
        localStorage.removeItem('access-token');
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    googleSignIn,
    updateUserProfile,
    signIn,
    logOut,
    changePassword
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
