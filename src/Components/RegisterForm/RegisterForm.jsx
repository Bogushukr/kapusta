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

export default function RegisterForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        onSubmit(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form autoComplete="off">
        <label htmlFor="email">Электронная почта: </label>
        <Field type="email" name="email" placeholder="your@email.com" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Пароль: </label>
        <Field type="password" name="password" placeholder="******" />
        <ErrorMessage name="password" />

        <button type="submit">Войти</button>
        <button type="submit">Регистрация</button>
      </Form>
    </Formik>
  );
}
