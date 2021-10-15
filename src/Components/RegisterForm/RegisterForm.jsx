import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ButtonGoogle from '../ButtonGoogle';

import './RegisterForm.scss';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(
      1,
      <p className="formReg_ErrorMessage">Must be 1 characters or more</p>,
    )
    .max(
      30,
      <p className="formReg_ErrorMessage">Must be 30 characters or less</p>,
    )
    .required(<p className="formReg_ErrorMessage">это обязательное поле</p>),
  email: Yup.string()
    .email(<p className="formReg_ErrorMessage">Invalid email address</p>)
    .required(<p className="formReg_ErrorMessage">это обязательное поле</p>),
  password: Yup.string()
    .min(
      6,
      <p className="formReg_ErrorMessage">Must be 6 characters or more</p>,
    )
    .max(
      20,
      <p className="formReg_ErrorMessage">Must be 20 characters or less</p>,
    )
    .required(<p className="formReg_ErrorMessage">это обязательное поле</p>),
});

export default function RegisterForm({ handleSubmitRegister, responseGoogle }) {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmitRegister = handleSubmitRegister(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form autoComplete="off" className="formReg">
        <p className="formReg_text google">
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <ButtonGoogle responseGoogle={responseGoogle} />
        <p className="formReg_text ">
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <label htmlFor="name" className="formReg_label">
          Ваше имя:{' '}
        </label>
        <div className="formReg_input">
          <Field
            type="name"
            name="name"
            placeholder="your name"
            className="formReg_placeholder"
          />
          <ErrorMessage name="name" />
        </div>
        <label htmlFor="email" className="formReg_label">
          <span className="formReg_redStar">*</span>Электронная почта:{' '}
        </label>
        <div className="formReg_input">
          <Field
            type="email"
            name="email"
            placeholder="your@email.com"
            className="formReg_placeholder"
          />
          <ErrorMessage name="email" />
        </div>
        <label htmlFor="password" className="formReg_label">
          <span className="formReg_redStar">*</span>Пароль:{' '}
        </label>
        <div className="formReg_input_last">
          <Field
            type="password"
            name="password"
            placeholder="••••••••"
            className="formReg_placeholder password"
          />
          <ErrorMessage name="password" />
        </div>
        <div className="formReg_footer">
          {/* <NavLink to="/" exact className="formReg_NavLink">
            <button type="button" className="formReg_btn">
              Войти
            </button>
          </NavLink> */}
          <button type="submit" className="formReg_btn last">
            Регистрация
          </button>
        </div>
      </Form>
    </Formik>
  );
}
