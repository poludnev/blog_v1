import React from 'react';
import apiClient from 'src/libs/apiClient';
import Routes from 'src/libs/routes';

import { postsListData } from 'src/types';

const blogRepository = {
  async sendForm(data: { title: string; text: string; timestamp: number }) {
    return apiClient.post(Routes.apiSendBlogFormPath(), data);
  },
  async getBlogData() {
    return apiClient.get(Routes.apiGetBlogDataPath());
  },
  listenUpdateBlogData(
    setBlogData: React.Dispatch<React.SetStateAction<postsListData | null>>,
    processBlogData: (data: { [id: string]: any }) => postsListData,
  ) {
    return apiClient.listenUpdate(
      Routes.apiListenUpdateDataPath(),
      setBlogData,
      processBlogData,
    );
  },
};

export default blogRepository;
