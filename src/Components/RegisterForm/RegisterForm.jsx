import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(1, 'Must be 1 characters or more')
    .max(20, 'Must be 20 characters or less'),
  email: Yup.string()
    .email('Invalid email address')
    .required('это обязательное поле'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .max(20, 'Must be 20 characters or less')
    .required('это обязательное поле'),
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
      <Form autoComplete="off">
        <label htmlFor="name">Ваше имя: </label>
        <br />
        <Field
          type="name"
          name="name"
          placeholder="your name"
          onChenge="submit"
        />
        <br />
        <ErrorMessage name="name" />
        <br />
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
        <button type="submit">Регистрация</button>
        <NavLink to="/" exact>
          Войти
        </NavLink>
      </Form>
    </Formik>
  );
}
