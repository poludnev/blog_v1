import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/contexts/AuthContext';
import { modalTypes } from 'src/types';
import Button from '../Button/Button';

import styles from 'src/components/Header/Header.module.css';

const Header = (props: {
  showModal: (modalType: modalTypes) => () => void;
}) => {
  const navigate = useNavigate();
  const { currentUser, signOut, isSignedIn } = useAuth();
  const [isShowDropdown, setShowDropdown] = useState<boolean>(false);
  const { showModal } = props;

  const toogleDropdown = (): void => {
    setShowDropdown(!isShowDropdown);
  };
  return (
    <div className={styles.header}>
      {isShowDropdown && (
        <div className={styles.dropdown} onMouseLeave={toogleDropdown}>
          <div className={styles.dropdownRow}>
            <div className="sign-in-status">User: {currentUser?.userName}</div>
          </div>
          {!isSignedIn && (
            <div className={styles.dropdownRow}>
              <Button
                title="Sign In"
                onClick={() => {
                  navigate('/signin');
                }}
                style={{ color: 'blue', size: 'smaller', inverted: true }}
              />
            </div>
          )}
          {isSignedIn && (
            <>
              <div className={styles.dropdownRow}>
                <Button
                  title="New Post"
                  style={{ color: 'green', inverted: true, size: 'smaller' }}
                  onClick={showModal('newPostModal')}
                />
              </div>
              <div className={styles.dropdownRow}>
                <Button
                  title="Sign Out"
                  onClick={signOut}
                  style={{ color: 'grey', inverted: true, size: 'smaller' }}
                />
              </div>
            </>
          )}
        </div>
      )}
      <div className={styles.headerContainer}>
        <div>
          <h2>Roman's Blog</h2>
        </div>
        <div className={styles.headerMenuButton}>
          <Button
            title="menu"
            style={{
              color: 'grey',
              inverted: true,
              rounded: true,
              size: 'smaller',
            }}
            onClick={toogleDropdown}
          />
        </div>
        <div className={styles.headerNavMenu}>
          <div className="sign-in-status">User: {currentUser?.userName}</div>
          {isSignedIn && (
            <>
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
              onClick={() => {
                navigate('/signin');
              }}
              style={{ color: 'blue', size: 'smaller', inverted: true }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
