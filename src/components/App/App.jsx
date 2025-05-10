import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';
import { useEffect, lazy, Suspense } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className={css.app}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
