import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './RegisterForm.scss';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(1, 'Must be 1 characters or more')
    .max(20, 'Must be 20 characters or less')
    .required(<p className="formReg_ErrorMessage">это обязательное поле</p>),
  email: Yup.string()
    .email('Invalid email address')
    .required(<p className="formReg_ErrorMessage">это обязательное поле</p>),
  password: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .max(20, 'Must be 20 characters or less')
    .required(<p className="formReg_ErrorMessage">это обязательное поле</p>),
});

export default function RegisterForm({ handleSubmitRegister }) {
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
        {/* Здесь должен быть батон Гугл */}
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
            placeholder="******"
            className="formReg_placeholder"
          />
          <ErrorMessage name="password" />
        </div>
        <div className="formReg_footer">
          <NavLink to="/" exact className="formReg_NavLink">
            <button type="button" className="formReg_btn">
              Войти
            </button>
          </NavLink>
          <button type="submit" className="formReg_btn last">
            Регистрация
          </button>
        </div>
      </Form>
    </Formik>
  );
}
