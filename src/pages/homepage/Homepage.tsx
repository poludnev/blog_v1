import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import BlogBody from '../../components/BlogBody/BlogBody';
import Header from '../../components/Header/Header';
import SignInModal from '../../components/SignInModal/SignInModal';
import Modal from '../../components/Modal/Modal';
import modalModel from '../../models/modal.model';
import { modalTypes } from '../../types';
import './Homepage.styles.scss';

const Homepage = () => {
  const [isShowForm, setShowForm] = useState<boolean>(false);
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<modalTypes>('signInModal');
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!!currentUser) setShowForm(false);
  }, [currentUser]);

  const closeFromHandler = () => {
    setShowForm(false);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const showModalHandler = (modalType: modalTypes) => () => {
    setModalType(modalType);
    setShowModal(true);
  };

  return (
    <div className="homepage">
      {isShowForm && <SignInModal onClose={closeFromHandler} />}
      {isShowModal && (
        <Modal
          onClose={closeModalHandler}
          {...modalModel.getModalProps(modalType)}
        />
      )}
      <Header showForm={showFormHandler} showModal={showModalHandler} />
      <BlogBody />
    </div>
  );
};

export default Homepage;
