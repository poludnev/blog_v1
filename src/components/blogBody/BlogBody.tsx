import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import BlogRepository from 'src/repository/blogRepository';

import 'src/components/BlogBody/BlogBody.styles.scss';

type postsListData = {
  allIDs: string[];
  byID: { [id: string]: any };
};

const BlogBody = () => {
  const [blogData, setBlogData] = useState<postsListData | null>(null);
  const [isError, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  const processBlogData = (data: { [id: string]: any }) => ({
    allIDs: Object.keys(data).sort((a, b) => {
      return data[b].timestamp - data[a].timestamp;
    }),
    byID: data,
  });

  useEffect(() => {
    BlogRepository.getBlogData()
      .then((data) => {
        if (!data || Object.keys(data).length === 0)
          throw new Error('empty data or fetching data received');

        setBlogData(processBlogData(data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });

    const unsubscribeBlogUpdate = BlogRepository.listenUpdateBlogData(
      setBlogData,
      processBlogData,
    );
    return () => unsubscribeBlogUpdate();
  }, []);

  return (
    <div className="container">
      <div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching data</div>}
        {!isLoading &&
          !isError &&
          blogData &&
          blogData.allIDs.map((id) => (
            <Post key={id} data={blogData.byID[id]} />
          ))}
      </div>
    </div>
  );
};

export default BlogBody;
