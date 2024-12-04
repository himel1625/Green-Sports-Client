import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { createContext, useEffect, useState } from 'react';
import auth from '../Auth/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const GoogleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const handleGoogleBUtton = () => {
    return signInWithPopup(auth, GoogleProvider).then((res) =>
      setUser(res.user),
    );
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    return signOut(auth);
  };

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const ForgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const ManageProfile = (name, image, email) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
      email: email,
    }).then(() => {
      setUser((prevUser) => ({
        ...prevUser,
        displayName: name,
        photoURL: image,
        email: email,
      }));
    });
    // .finally(() => {
    //   setLoader(false);
    // });
  };
  useEffect(() => {
    const Observer = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      Observer();
    };
  }, [user]);

  const AuthInfo = {
    user,
    setUser,
    ForgotPassword,
    handleGoogleBUtton,
    handleRegister,
    LogOut,
    handleLogin,
    ManageProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
