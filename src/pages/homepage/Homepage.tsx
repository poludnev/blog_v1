import { useState, useEffect } from 'react';
import BlogBody from 'src/components/BlogBody/BlogBody';
import Header1 from 'src/components/Header/Header';
import Header from 'src/components/Header/HeaderV1';
import Modal from 'src/components/Modal/Modal';
import modalModel from 'src/models/modal.model';
import SignInPage from 'src/pages/SignInPage/SignInPage';
import { modalTypes } from 'src/types';
import { useAuth } from 'src/contexts/AuthContext';
import 'src/pages/homepage/Homepage.styles.scss';

const Homepage = () => {
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<modalTypes>('signInModal');
  // const [isSignedIn, setSignedIn] = useState<boolean>(false);
  const [isSignedIn, setSignedIn] = useState<boolean>(true);
  const { currentUser, signOut } = useAuth();

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = (modalType: modalTypes) => () => {
    setModalType(modalType);
    setShowModal(true);
  };

  useEffect(() => {
    setSignedIn(!!currentUser);
  }, [currentUser]);

  return (
    <div className="homepage">
      {isShowModal && (
        <Modal
          onClose={closeModalHandler}
          {...modalModel.getModalProps(modalType)}
        />
      )}
      {/* <Header1 showModal={showModalHandler} /> */}
      <Header />
      {!isSignedIn && <SignInPage />}

      {isSignedIn && <BlogBody />}
    </div>
  );
};

export default Homepage;
