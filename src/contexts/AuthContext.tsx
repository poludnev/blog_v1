import React, { useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { CurrentUser } from 'src/types';

import { auth, signInWithEmail } from 'src/firebase';

type props = {
  children: React.ReactChild | React.ReactChild[];
  value: any;
};

const AuthContext = React.createContext<any>(null);

export const useAuth = (): {
  currentUser: CurrentUser;
  signIn: any;
  signOut: any;
  isSignedIn: boolean;
} => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: props) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [isSignedIn, setSignedIn] = useState<boolean>(false);

  const signIn = (login: string, password: string) => {
    return signInWithEmail(login, password);
  };

  const signOut = () => {
    setSignedIn(false);
    return auth.signOut();
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser({
        email: user?.email || null,
        userName: user?.displayName || 'Guest',
        role: 'guest',
      });
      setSignedIn(!!user);
    });
    return unsub;
  }, []);

  const value = { currentUser, signIn, signOut, isSignedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
