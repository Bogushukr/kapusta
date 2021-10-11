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

  const googleSubmitRegister = response => {
    try {
      const { name, email, googleId } = response.profileObj;
      const data = {
        name,
        email,
        password: googleId,
      };
      // onRegister(data);
      console.log(data);
    } catch (error) {
      new Error(response.error);
    }
  };

  return (
    <RegisterForm
      handleSubmitRegister={handleSubmitRegister}
      responseGoogle={googleSubmitRegister}
    />
  );
};

export default RegisterPage;
