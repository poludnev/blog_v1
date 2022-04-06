import './Homepage.styles.scss';
import BlogBody from '../../components/blogBody/BlogBody';
import NewPostForm from '../../components/NewPostForm/NewPostForm';
const Homepage = () => {
  return (
    <div className="homepage">
      <NewPostForm />
      <BlogBody />
    </div>
  );
};

export default Homepage;
