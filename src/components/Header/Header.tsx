// import SignIn from '../SignIn/SignIn';
import { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button/Button';

import './Header.styles.scss';

const Header = (props: { showForm: () => void }) => {
  const { currentUser, signOut } = useAuth();
  const [isSignedIn, setSignedIn] = useState<boolean>(false);
  const { showForm } = props;

  useEffect(() => {
    setSignedIn(!!currentUser);
  }, [currentUser]);

  return (
    <div className="header-container">
      <div>
        <span className="title">Roman's Blog</span>
      </div>
      <div className="sign-in-group">
        {isSignedIn && (
          <>
            <div className="sign-in-status">
              Logged in as {currentUser?.email}
            </div>
            <Button title="Sign Out" onClick={signOut} color="green" />
          </>
        )}
        {!isSignedIn && (
          <Button
            title="Sign In To Post"
            onClick={showForm}
            color="green"
            negative
          />
        )}
      </div>
    </div>
  );
};

export default Header;
