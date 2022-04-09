export interface ModalBasicProps {
  submitAction?: (data?: any) => void;
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
