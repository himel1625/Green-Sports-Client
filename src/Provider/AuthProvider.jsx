import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
} from 'firebase/auth';

import { createContext, useEffect, useState } from 'react';
import auth from '../Auth/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const GoogleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  console.log(user);

  const handleGoogleBUtton = () => {
    return signInWithPopup(auth, GoogleProvider).then((res) =>
      setUser(res.user),
    );
  };

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const ForgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const Observer = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      Observer();
    };
  }, []);

  const AuthInfo = {
    user,
    setUser,
    ForgotPassword,
    handleGoogleBUtton,
    handleRegister,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
