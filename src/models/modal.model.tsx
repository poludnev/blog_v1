import { ModalBasicProps } from 'src/types';
import BlogRepository from 'src/repository/blogRepository';
import { modalTypes } from 'src/types';

export const getModalProps = (modalType: modalTypes): ModalBasicProps => {
  switch (modalType) {
    case 'newPostModal':
      return {
        type: 'newPostModal',
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
          BlogRepository.sendForm({ title, text, timestamp });
        },
      };
    case 'signInModal':
      return {
        type: 'signInModal',
        headerTitle: 'Sing In',
      };
    default:
      throw new Error('unkknown modal type');
  }
};

const modalModel = { getModalProps };

export default modalModel;
