export type postsListData = {
  allIDs: string[];
  byID: { [id: string]: any };
};

export interface ModalBasicProps {
  submitAction?: (data?: any) => void;
  type: modalTypes;
  headerTitle: string;
  footer?: {
    show: boolean;
    footerTitle: string;
    footerButtons?: {
      title: string;
      type?: 'submit' | 'button' | undefined;
      style?: {};
      onClick?: () => void;
    }[];
  };
}

export type modalTypes = 'newPostModal' | 'signInModal';

export interface CurrentUser {
  email: string | null;
  userName: string;
  role: 'admin' | 'user' | 'guest';
}
