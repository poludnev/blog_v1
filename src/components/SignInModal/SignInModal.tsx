import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import './SignInModal.styles.scss';

type SignInModalProps = {
  onClose: (ev: any) => void;
};

const SignInModal = (props: SignInModalProps) => {
  const { onClose } = props;

  const { signIn } = useAuth();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoginError, setLoginError] = useState<boolean>(false);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(login, password);
    } catch (e) {
      setLoginError(true);
    }
  };

  const changeHandler =
    (cb: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      cb(event.target.value);
    };
  return (
    <div className="sign-in-modal-container" onClick={onClose}>
      <div
        className="sing-in-modal-from-container"
        onClick={(event: React.MouseEvent<HTMLDivElement>) =>
          event.stopPropagation()
        }
      >
        <button className="sign-in-close-button" onClick={onClose}>
          x
        </button>
        <form>
          <div className="sign-in-form-title">
            <div>
              <span>Please Log In</span>
            </div>
            <div></div>
          </div>
          <div className="sign-in-form-fields">
            <div className="sing-in-form-input-group">
              <label className="input-label">Login</label>
              <input
                type="text"
                placeholder="login or email"
                value={login}
                onChange={changeHandler(setLogin)}
              />
            </div>
            <div className="sing-in-form-input-group">
              <label className="input-label">Password</label>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={changeHandler(setPassword)}
              />
            </div>
          </div>
          <div className="sign-in-form-buttons">
            {isLoginError && (
              <div className="error">Error: Wrong email or password</div>
            )}
            <div className="button-container">
              <Button title="Sign In" type="submit" onClick={submitHandler} />
            </div>
            <div className="button-container">
              <Button title="Close" type="button" onClick={onClose} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
