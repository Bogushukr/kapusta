import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../../Components/RegisterForm';
import { authOperations } from '../../Redux/auth';
import './RegisterPage.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = useCallback(
    data => {
      dispatch(authOperations.register(data));
    },
    [dispatch],
  );

  const handleSubmitRegister = ({ name, email, password }) => {
    onRegister({ name, email, password });
    console.log('handleSubmitRegister = ', { name, email, password });
  };
  return (
    <div className="register_page">
      <div className="register_hero">
        <div className="register_hero-img"></div>
        <div className="register_hero-img_footer"></div>
        <div className="register_hero-textBox">
          <span className="register_hero-title-pic above" />
          <h1 className="register_hero-title">Kapusta</h1>
          <p className="register_hero-text">Smart Finance</p>
          <span className="register_hero-title-pic under" />
        </div>
      </div>
       <RegisterForm handleSubmitRegister={handleSubmitRegister}
         responseGoogle={googleSubmitRegister}
       />
    </div>
  );
};

export default RegisterPage;
