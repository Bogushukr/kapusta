import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('это обязательное поле'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .max(20, 'Must be 20 characters or less')
    .required('это обязательное поле'),
});

export default function LoginForm({ handleSubmitLogin }) {
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
      <Form autoComplete="off">
        <label htmlFor="email">Электронная почта: </label>
        <br />
        <Field
          type="email"
          name="email"
          placeholder="your@email.com"
          onChenge="submit"
        />
        <br />
        <ErrorMessage name="email" />
        <br />
        <label htmlFor="password">Пароль: </label>
        <br />
        <Field
          type="password"
          name="password"
          placeholder="******"
          onChenge="submit"
        />
        <br />
        <ErrorMessage name="password" />
        <br />
        <button type="submit">Войти</button>
        <NavLink to="/register" exact>
          Регистрация
        </NavLink>
      </Form>
    </Formik>
  );
}
