import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            id="email"
            className={s.field}
          />
          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            id="password"
            className={s.field}
          />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
