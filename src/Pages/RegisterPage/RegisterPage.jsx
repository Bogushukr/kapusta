import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../../Components/RegisterForm';
import { authOperations } from '../../Redux/auth';
// import style from "./RegisterPage.module.css";

const RegisterPage = () => {
  // const name = 'UserName';
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleChange = ({ email, password }) => {
  //   setEmail(email);
  //   setPassword(password);
  // };

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

  return <RegisterForm handleSubmitRegister={handleSubmitRegister} />;
};

export default RegisterPage;
