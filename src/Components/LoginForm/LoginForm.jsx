import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ButtonGoogle from '../ButtonGoogle';

import './LoginForm.scss';

const validationSchema = Yup.object({
  email: Yup.string()
    .email(<p className="formLog_ErrorMessage">Invalid email address</p>)
    .required(<p className="formLog_ErrorMessage">это обязательное поле</p>),
  password: Yup.string()
    .min(
      6,
      <p className="formLog_ErrorMessage">Must be 6 characters or more</p>,
    )
    .max(
      30,
      <p className="formLog_ErrorMessage">Must be 30 characters or less</p>,
    )
    .required(<p className="formLog_ErrorMessage">это обязательное поле</p>),
});

export default function LoginForm({ handleSubmitLogin, responseGoogle }) {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmitLogin = handleSubmitLogin(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form autoComplete="off" className="formLog">
        <p className="formLog_text google">
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <ButtonGoogle responseGoogle={responseGoogle} />
        <p className="formLog_text ">
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <label htmlFor="email" className="formLog_label">
          <ErrorMessage name="email">
            {() => <span className="formLog_redStar">*</span>}
          </ErrorMessage>
          Электронная почта:
        </label>
        <div className="formLog_input">
          <Field
            type="email"
            name="email"
            placeholder="your@email.com"
            className="formLog_placeholder"
          />
          <ErrorMessage name="email" />
        </div>
        <label htmlFor="password" className="formLog_label">
          <ErrorMessage name="password">
            {() => <span className="formLog_redStar">*</span>}
          </ErrorMessage>
          Пароль:
        </label>
        <div className="formLog_input_last">
          <Field
            type="password"
            name="password"
            placeholder="••••••••"
            className="formLog_placeholder password"
          />
          <ErrorMessage name="password" />
        </div>
        <div className="formLog_footer">
          <button type="submit" className="formLog_btn">
            Войти
          </button>
          <NavLink to="/register" exact className="formLog_NavLink">
            <button type="button" className="formLog_btn">
              Регистрация
            </button>
          </NavLink>
        </div>
      </Form>
    </Formik>
  );
}
