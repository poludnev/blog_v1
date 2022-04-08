import React, { useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';

import { auth, signInWithEmail } from '../firebase';

type props = {
  children: React.ReactChild | React.ReactChild[];
  value: any;
};
const AuthContext = React.createContext<any>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const signIn = (login: string, password: string) => {
    return signInWithEmail(login, password);
  };

  const signOut = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  const value = { currentUser, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
