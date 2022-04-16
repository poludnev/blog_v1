import { addDocument, getDocuments, listenUpdate } from 'src/firebase';
const apiClient = {
  get(url: string) {
    return getDocuments(url);
  },
  post(url: string, data: Object) {
    return addDocument(url, data);
  },
  listenUpdate(
    url: string,
    setState: React.Dispatch<React.SetStateAction<any>>,
    processData: (data: any) => any,
  ) {
    return listenUpdate(url, setState, processData);
  },
};

export default apiClient;
