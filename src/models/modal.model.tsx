import { ModalBasicProps } from '../types';
import BlogRepository from '../repository/blogRepository';
import { modalTypes } from '../types';

export const getModalProps = (modalType: modalTypes): ModalBasicProps => {
  switch (modalType) {
    case 'newPostModal':
      return {
        headerTitle: 'Write new post',
        footer: {
          show: false,
          footerTitle: 'footer',
          footerButtons: [
            {
              title: 'submit',
              type: 'submit',
              style: { color: 'blue', inverted: true },
            },
            {
              title: 'close',
              style: { color: 'red', inverted: true },
              onClick: () => console.log('test2'),
            },
          ],
        },
        submitAction: ({ title, text, timestamp }) => {
          console.log('submit action done', title, text, timestamp);
          BlogRepository.sendForm({ title, text, timestamp });
        },
      };
    case 'signInModal':
      return {
        headerTitle: 'Sing In',
      };
    default:
      throw new Error('unkknown modal type');
  }
};

const modalModel = { getModalProps };

export default modalModel;
