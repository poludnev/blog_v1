import { useState, useEffect } from 'react';
import BlogBody from 'src/components/BlogBody/BlogBody';
import Header from 'src/components/Header/Header';
import Modal from 'src/components/Modal/Modal';
import modalModel from 'src/models/modal.model';
import { modalTypes } from 'src/types';
import { useAuth } from 'src/contexts/AuthContext';
import 'src/pages/homepage/Homepage.styles.scss';

const Homepage = () => {
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<modalTypes>('signInModal');
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
      <Header showModal={showModalHandler} />
      <BlogBody />
    </div>
  );
};

export default Homepage;
