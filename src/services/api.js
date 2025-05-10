import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

// let store = null;

// export const injectStore = (_store) => {
//   store = _store;
// };

// export const goitAPI = axios.create({
//   baseURL: 'https://connections-api.goit.global/',
// });

// goitAPI.interceptors.request.use(
//   (config) => {
//     const token = store?.getState()?.auth?.token;
//     console.log('Token: ', token);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     } else {
//       delete config.headers.Authorization;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

// Auth API

export const signup = async ({ name, email, password }) => {
  const response = await axios.post('/users/signup', {
    name,
    email,
    password,
  });
  setAuthHeader(response.data.token);
  return response;
};

export const login = async ({ email, password }) => {
  const response = await axios.post('/users/login', { email, password });
  setAuthHeader(response.data.token);
  return response;
};

export const logout = async () => {
  const response = await axios.post('/users/logout');
  removeAuthHeader();
  return response;
};

export const refresh = async ({ token }) => {
  setAuthHeader(token);
  return await axios.get('/users/current');
};

// contacts API

export const contactsGetAll = async () => {
  return await axios.get('/contacts');
};

export const contactsAddNew = async ({ name, number }) => {
  return await axios.post('/contacts', { name, number });
};

export const contactsDeleteById = async ({ id }) => {
  return await axios.delete(`/contacts/${id}`);
};

export const contactsPatch = async ({ id, name, number }) => {
  return await axios.patch(`/contacts/${id}`, { name, number });
};

const contactsApi = {
  axios,
  // setAuthHeader,
  // removeAuthHeader,
  auth: {
    signup,
    login,
    logout,
    refresh,
  },
  contacts: {
    contactsGetAll,
    contactsAddNew,
    contactsDeleteById,
    contactsPatch,
  },
  responses: {
    other: {
      [401]: 'Missing header with authorization token.',
      [500]: 'Server error.',
    },
    signup: {
      [201]: 'User created.',
      [400]: 'User creation error.',
    },
    login: {
      [200]: 'User is logged in.',
      [400]: 'Login error.',
    },
    logout: {
      [200]: 'The user is logged out.',
    },
    refresh: {
      [200]: 'Information found.',
    },
    contactsGetAll: {
      [200]: 'Contacts found.',
      [404]: 'There is no such user collection.',
    },
    contactsAddNew: {
      [201]: 'The contact was successfully created.',
      [400]: 'Error creating contact.',
    },
    contactsDeleteById: {
      [200]: 'The contact was successfully deleted.',
      [404]: 'There is no such user collection.',
    },
    contactsPatch: {
      [200]: 'The contact was successfully updated.',
      [400]: 'Contact update failed.',
    },
  },
};

export default contactsApi;

// -----------------------------------------------------

// User{
// id	string
// Backend-generated unique identifier.

// name*	string
// Username.

// email*	string
// E-mail address.

// password*	string
// Password.

// }
// example: OrderedMap { "name": "Adrian Cross", "email": "across@mail.com", "password": "examplepwd12345" }

// Contact{
// id	string
// Backend-generated unique identifier.

// name*	string
// Contact name.

// number*	string
// Phone number of the contact.

// }
// example: OrderedMap { "name": "Jacob Mercer", "number": "761-23-96" }
