import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h1>Contacts Page</h1>
      {/* <h1>Phonebook</h1> */}
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
