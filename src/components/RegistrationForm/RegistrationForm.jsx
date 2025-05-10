import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label htmlFor="name" className={s.label}>
            Username
          </label>
          <Field
            name="name"
            type="text"
            placeholder="Username"
            id="name"
            className={s.input}
          />
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            id="email"
            className={s.input}
          />
          <label htmlFor="password" className={s.label}>
            Username
          </label>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            id="password"
            className={s.inputLast}
          />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;
