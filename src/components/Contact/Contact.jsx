import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const contactRemove = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.contact}>
      <div className={css.text}>
        <p>
          <FaUser className={css.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => contactRemove(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
