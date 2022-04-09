import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import { modalTypes } from '../../types';

import './Header.styles.scss';

const Header = (props: {
  showModal: (modalType: modalTypes) => () => void;
}) => {
  const { currentUser, signOut } = useAuth();
  const [isSignedIn, setSignedIn] = useState<boolean>(false);
  const { showModal } = props;

  useEffect(() => {
    setSignedIn(!!currentUser);
  }, [currentUser]);

  return (
    <div className="header-container">
      <div>Roman's Blog</div>
      <div className="sign-in-group">
        {isSignedIn && (
          <>
            <div className="sign-in-status">
              Logged in as {currentUser?.email}
            </div>
            <Button
              title="New Post"
              style={{ color: 'green', inverted: true }}
              onClick={showModal('newPostModal')}
            />
            <Button
              title="Sign Out"
              onClick={signOut}
              style={{ color: 'green' }}
            />
          </>
        )}
        {!isSignedIn && (
          <>
            <div className="sign-in-status">
              Log in as admin to write new post
            </div>
            <Button
              title="Sign In"
              onClick={showModal('signInModal')}
              style={{ color: 'green' }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
