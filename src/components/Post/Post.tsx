import PostFeedBack from 'src/components/PostFeedback/PostFeedBack';
import 'src/components/Post/Post.styles.scss';
import parseHTML from 'html-react-parser';
import timeDateService from 'src/services/timeDateService';

type postProps = {
  data: { title: string; timestamp: number; text: string };
  feedback?: string | undefined;
};
const Post = ({ data, feedback }: postProps) => {
  const { title, timestamp, text } = data;

  const elapsedTime = timeDateService.getElapsedTime(timestamp, Date.now());
  const formatedDate = timeDateService.getFormatedDate(timestamp);

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-date">
          <span>{`${elapsedTime} ago`}</span>
          {' | '}
          <span>{formatedDate}</span>
        </div>
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
