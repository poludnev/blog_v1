import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useAuth } from '../../contexts/AuthContext';

import './SingInForm.styles.scss';

type SignInFormProps = {
  onClose: (() => void) | undefined;
};
const SignInForm = (props: SignInFormProps) => {
  const { onClose } = props;
  const [loginInputValue, setLoginInputValue] = useState<string>('');
  const [passwordInputValue, setPasswordInputValue] = useState<string>('');
  const [isLoginError, setLoginError] = useState<boolean>(false);

  const { signIn } = useAuth();

  const clearForm = () => {
    setLoginInputValue('');
    setPasswordInputValue('');
  };

  const changeHandler =
    (cb: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      cb(event.target.value);
    };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await signIn(loginInputValue, passwordInputValue);
      clearForm();
      if (onClose) onClose();
    } catch (e) {
      setLoginError(true);
    }
  };

  return (
    <form className="sign-in-form" onSubmit={submitHandler}>
      <Input
        showlabel={true}
        type="email"
        labelTitle="Login"
        placeholder="write your email here"
        value={loginInputValue}
        onChange={changeHandler(setLoginInputValue)}
      />
      <Input
        showlabel={true}
        type="password"
        labelTitle="Password"
        placeholder="write your password"
        value={passwordInputValue}
        onChange={changeHandler(setPasswordInputValue)}
      />
      <div className="form-control-group">
        {isLoginError && (
          <div className="error">Error: Wrong email or password</div>
        )}
        <Button
          title={'Submit'}
          type="submit"
          style={{ color: 'blue', inverted: true }}
        />
        <Button
          title={'Close'}
          style={{ color: 'red', inverted: true }}
          onClick={onClose}
        />
      </div>
    </form>
  );
};

export default SignInForm;
