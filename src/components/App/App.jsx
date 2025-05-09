import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ContactList />
    </div>
  );
}

export default App;
