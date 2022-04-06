import apiClient from '../libs/apiClient';
import Routes from '../libs/routes';

const blogRepository = {
  async sendForm(data: { title: string; text: string; timestamp: number }) {
    return apiClient.post(Routes.apiSendBlogFormPath(), data);
  },
  async getBlogData() {
    return apiClient.get(Routes.apiGetBlogDataPath());
  },
};

export default blogRepository;
