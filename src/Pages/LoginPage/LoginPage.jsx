import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../../Components/LoginForm';
import { authOperations } from '../../Redux/auth';
// import style from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = useCallback(
    data => {
      dispatch(authOperations.logIn(data));
    },
    [dispatch],
  );

  const handleSubmitLogin = ({ email, password }) => {
    onLogin({ email, password });
    console.log('handleSubmitLogin', { email, password });
  };

  const googleSubmitLogin = response => {
    try {
      const { email, googleId } = response.profileObj;
      const data = {
        email,
        password: googleId,
      };
      // onLogin({ email, googleId });
      console.log(data);
    } catch (error) {
      new Error(response.error);
    }
  };

  return (
    <LoginForm
      handleSubmitLogin={handleSubmitLogin}
      responseGoogle={googleSubmitLogin}
    />
  );
};

export default LoginPage;
