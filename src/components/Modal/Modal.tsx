import React, { useEffect, useState } from 'react';
import SignInForm from 'src/components/SingInForm/SingInForm';
import NewPostForm from 'src/components/NewPostForm/NewPostForm';
import Button from 'src/components/Button/Button';
import { ModalBasicProps, modalTypes } from 'src/types';

import './Modal.styles.scss';

const ButtonElement = (props: {
  title: string;
  type?: 'button' | 'submit' | undefined;
  style?: {} | undefined;
  onClick?: () => void;
}) => {
  return (
    <div className="button-element">
      <Button {...props} />
    </div>
  );
};

const BodyComponent = ({
  component: Component,
  onClose,
  submitAction,
}: {
  component: React.FC<{
    onClose: (() => void) | undefined;
    submitAction: (() => void) | undefined;
  }>;
  onClose?: () => void;
  submitAction?: () => void;
}) => {
  return (
    <div>
      <Component onClose={onClose} submitAction={submitAction} />
    </div>
  );
};

interface ModalProps extends ModalBasicProps {
  onClose: () => void;
}

const Modal = ({
  type,
  onClose,
  submitAction,
  headerTitle,
  footer,
}: ModalProps) => {
  const [isLoaded, setLoded] = useState<boolean>(false);
  const [bodyComponentType, setBodyComponentType] = useState<modalTypes | null>(
    null,
  );

  const getComponent = (type: modalTypes | null) => {
    switch (type) {
      case 'newPostModal':
        return NewPostForm;
      case 'signInModal':
        return SignInForm;
      default:
        throw new Error('wrong type');
    }
  };

  useEffect(() => {
    setBodyComponentType(type);
    setLoded(true);
  }, [type, isLoaded]);
  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-dialog"
        onClick={(event: React.MouseEvent) => event.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <div className="title">{headerTitle}</div>
            <button className="button close-button" onClick={onClose}>
              X
            </button>
          </div>
          <div className="modal-body">
            {isLoaded && (
              <BodyComponent
                component={getComponent(bodyComponentType)}
                onClose={onClose}
                submitAction={submitAction}
              />
            )}
          </div>
          {footer?.show && (
            <div className="modal-footer">
              <div className="title">{footer.footerTitle}</div>
              <div className="button-group">
                {footer.footerButtons?.map((props, index) => (
                  <ButtonElement key={`${index}${props.title}`} {...props} />
                ))}
                <ButtonElement
                  title="Close"
                  style={{ color: 'red', inverted: true }}
                  onClick={onClose}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
