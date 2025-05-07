import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        ...values,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.contactForm}>
        <div className={css.fieldBox}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} autoComplete="name" />

          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.fieldBox}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            autoComplete="phone"
          />

          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button type="submit" className={css.sendButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
