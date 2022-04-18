import React, { useState } from 'react';
import { useAuth } from 'src/contexts/AuthContext';

import Input from 'src/components/Input/Input';
import Button from 'src/components/Button/Button';

import styles from 'src/pages/SignInPage/SignInPage.module.css';

const SignInPage = () => {
  const [loginValue, setLoginValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isLoginError, setLoginError] = useState<boolean>(false);
  const [isLoginingIn, setIsLogingIn] = useState<boolean>(false);
  const { signIn } = useAuth();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLogingIn(true);

    try {
      await signIn(loginValue, passwordValue);
    } catch (e) {
      setLoginError(true);
    } finally {
      setIsLogingIn(false);
    }
  };

  const changeHandler =
    (cb: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      cb(event.target.value);
    };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.dialog}>
          <div className={styles.title}>
            <h1>SIGN IN</h1>
          </div>
          {isLoginError && (
            <div className={styles.loginError}>
              <span>Wrong username or password. Please try again.</span>
            </div>
          )}
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={submitHandler}>
              <Input
                labelTitle="Your username"
                placeholder="Enter your username"
                value={loginValue}
                onChange={changeHandler(setLoginValue)}
              />
              <Input
                type="password"
                labelTitle="Your password"
                placeholder="Enter your username"
                value={passwordValue}
                onChange={changeHandler(setPasswordValue)}
              />
              <Button
                disabled={isLoginingIn}
                title="Sign In"
                type="submit"
                style={{ color: 'blue', inverted: true, width: '100' }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
