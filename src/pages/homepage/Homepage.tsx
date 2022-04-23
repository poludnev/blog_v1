import { useEffect, useState, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import BlogBody from 'src/components/BlogBody/BlogBody';
import Header from 'src/components/Header/Header';
import Modal from 'src/components/Modal/Modal';
import SignInPage from 'src/pages/SignInPage/SignInPage';
import modalModel from 'src/models/modal.model';
import BackToTopButton from 'src/components/BackToTopButton/BackToTopButton';

import { modalTypes } from 'src/types';
import 'src/pages/homepage/Homepage.styles.scss';

const Homepage = () => {
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<modalTypes>('signInModal');
  const [isShowBackButton, setShowBackButton] = useState<boolean>(false);
  const refScrollUp = useRef<HTMLDivElement>(null);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = (modalType: modalTypes) => () => {
    setModalType(modalType);
    setShowModal(true);
  };

  const backToTopHandler = () => {
    if (refScrollUp) {
      refScrollUp.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  };

  const listenToScrollShowBackButton = () => {
    const showBackButtonHieght = 150;
    const scroll = document.documentElement.scrollTop;
    if (scroll > showBackButtonHieght) {
      setShowBackButton(true);
      return;
    }
    setShowBackButton(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScrollShowBackButton);

    return () =>
      window.removeEventListener('scroll', listenToScrollShowBackButton);
  }, []);

  return (
    <div className="homepage" ref={refScrollUp}>
      {isShowModal && (
        <Modal
          onClose={closeModalHandler}
          {...modalModel.getModalProps(modalType)}
        />
      )}
      {isShowBackButton && <BackToTopButton onClick={backToTopHandler} />}
      <Header showModal={showModalHandler} />
      <Routes>
        <Route path="/" element={<Navigate to="blog_v1" />}></Route>
        <Route path="/blog_v1" element={<BlogBody />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
      </Routes>
    </div>
  );
};

export default Homepage;
