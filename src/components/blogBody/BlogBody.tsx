import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import BlogRepository from '../../repository/blogRepository';

import './BlogBody.styles.scss';

type postListData = {
  allIDs: string[];
  byID: { [id: string]: any };
};

const BlogBody = () => {
  const [blogData, setBlogData] = useState<postListData | null>(null);

  useEffect(() => {
    BlogRepository.getBlogData().then((data) => {
      const allIDs = Object.keys(data);
      setBlogData({ allIDs, byID: data });
    });
  }, []);

  return (
    <div className="container">
      <div className="title">Roman's blog</div>
      <div>
        {blogData &&
          blogData.allIDs.map((id) => (
            <Post key={id} data={blogData.byID[id]} />
          ))}
      </div>
    </div>
  );
};

export default BlogBody;
