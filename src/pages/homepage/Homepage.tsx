import { useState } from 'react';
import BlogBody from '../../components/BlogBody/BlogBody';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import modalModel from '../../models/modal.model';
import { modalTypes } from '../../types';
import './Homepage.styles.scss';

const Homepage = () => {
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<modalTypes>('signInModal');

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = (modalType: modalTypes) => () => {
    setModalType(modalType);
    setShowModal(true);
  };

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
