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

  return <LoginForm handleSubmitLogin={handleSubmitLogin} />;
};

export default LoginPage;
