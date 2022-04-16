import { useState } from 'react';
import BlogBody from 'src/components/BlogBody/BlogBody';
import Header from 'src/components/Header/Header';
import Modal from 'src/components/Modal/Modal';
import modalModel from 'src/models/modal.model';
import { modalTypes } from 'src/types';
import 'src/pages/homepage/Homepage.styles.scss';

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
