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
  const [loading, setLoading] = useState(true);

  const handleGoogleBUtton = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider).then(res => setUser(res.user));
  };
  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    return signOut(auth);
  };

  const ForgotPassword = email => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const ManageProfile = (name, image, email) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
      email: email,
    }).then(() => {
      setUser(prevUser => ({
        ...prevUser,
        displayName: name,
        photoURL: image,
        email: email,
      }));
    });
  };
  useEffect(() => {
    const Observer = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
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
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
