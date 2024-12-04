import { createContext } from 'react';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const AuthInfo = {
    name: 'himel mia',
  };
  
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
