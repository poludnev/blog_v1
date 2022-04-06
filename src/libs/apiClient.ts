import { addDocument, getDocuments } from './firebase';
const apiClient = {
  get(url: string) {
    return getDocuments(url);
  },
  post(url: string, data: Object) {
    return addDocument(url, data);
  },
};

export default apiClient;
