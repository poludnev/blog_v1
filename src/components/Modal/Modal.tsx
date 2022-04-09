import Button from '../Button/Button';
import Form from '../Form/Form';
import { ModalBasicProps } from '../../types';

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

const Modal = ({ onClose, submitAction, headerTitle, footer }: ModalProps) => {
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
            <BodyComponent
              component={Form}
              onClose={onClose}
              submitAction={submitAction}
            />
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
