import { useEffect, useState } from 'react';
import { useAuth } from 'src/contexts/AuthContext';
import { modalTypes } from 'src/types';
import Button from '../Button/Button';

import styles from 'src/components/Header/Header.module.css';

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
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <h2>Roman's Blog</h2>
        </div>
        <div className={styles.headerMenuButton}>
          <Button
            disabled
            title="menu"
            style={{
              color: 'grey',
              inverted: true,
              rounded: true,
              size: 'smaller',
            }}
          />
        </div>
        <div className={styles.headerNavMenu}>
          {isSignedIn && (
            <>
              <div className="sign-in-status">
                Signed in as {currentUser?.email}
              </div>
              <Button
                title="New Post"
                style={{ color: 'green', inverted: true, size: 'smaller' }}
                onClick={showModal('newPostModal')}
              />
              <Button
                title="Sign Out"
                onClick={signOut}
                style={{ color: 'grey', inverted: true, size: 'smaller' }}
              />
            </>
          )}
          {!isSignedIn && (
            <Button
              title="Sign In"
              onClick={showModal('signInModal')}
              style={{ color: 'blue', size: 'smaller', inverted: true }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
