import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import BlogBody from '../../components/blogBody/BlogBody';
import NewPostForm from '../../components/NewPostForm/NewPostForm';
import Header from '../../components/Header/Header';
import SignInModal from '../../components/SignInModal/SignInModal';

import './Homepage.styles.scss';

const Homepage = () => {
  const [isSignedIn, setSignedIn] = useState<boolean>(false);
  const [isShowForm, setShowForm] = useState<boolean>(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    setSignedIn(!!currentUser);
    if (!!currentUser) setShowForm(false);
  }, [currentUser]);

  const closeFromHandler = () => {
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  return (
    <div className="homepage">
      {isShowForm && <SignInModal onClose={closeFromHandler} />}
      <Header showForm={showFormHandler} />
      {isSignedIn && <NewPostForm />}
      <BlogBody />
    </div>
  );
};

export default Homepage;
