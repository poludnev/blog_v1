import PostFeedBack from '../PostFeedback/PostFeedBack';
import './Post.styles.scss';
import parseHTML from 'html-react-parser';

type postProps = {
  data: { title: string; timestamp: number; text: string };
  feedback?: string | undefined;
};
const Post = ({ data, feedback }: postProps) => {
  const { title, timestamp, text } = data;

  const formatDate = (timeStamp: number) => {
    const date = new Date(timeStamp);
    return date.toISOString();
  };
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-date">{formatDate(timestamp)}</div>
        <div className="post-title">{title}</div>
      </div>
      <div className="post-body">
        <span className="post-text">{parseHTML(text)}</span>
      </div>
      {feedback && <PostFeedBack />}
    </div>
  );
};

export default Post;
