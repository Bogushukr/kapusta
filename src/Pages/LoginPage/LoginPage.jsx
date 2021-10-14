import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../../Components/LoginForm';
import { authOperations } from '../../Redux/auth';
import './LoginPage.scss';

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
      onLogin(data);
    } catch (error) {
      new Error(response.error);
    }
  };

  return (
    <div className="login_page">
      <div className="login_hero">
        <div className="login_hero-img"></div>
        <div className="login_hero-img_footer"></div>
        <div className="login_hero-textBox">
          <span className="login_hero-title-pic above" />
          <h1 className="login_hero-title">Kapusta</h1>
          <p className="login_hero-text">Smart Finance</p>
          <span className="login_hero-title-pic under" />
        </div>
      </div>
      <LoginForm
        handleSubmitLogin={handleSubmitLogin}
        responseGoogle={googleSubmitLogin}
      />
    </div>
  );
};

export default LoginPage;
