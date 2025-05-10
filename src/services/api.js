import axios from 'axios';

export const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = ``;
};

// Auth API

export const signup = async ({ name, email, password }) => {
  const response = await goitAPI.post('/users/signup', {
    name,
    email,
    password,
  });
  setAuthHeader(response.data.token);
  return response;
};

export const login = async ({ email, password }) => {
  const response = await goitAPI.post('/users/login', { email, password });
  setAuthHeader(response.data.token);
  return response;
};

export const logout = async () => {
  const response = await goitAPI.post('/users/logout');
  removeAuthHeader();
  return response;
};

export const refresh = async ({ token }) => {
  setAuthHeader(token);
  return await goitAPI.get('/users/current');
};

// contacts API

export const contactsGetAll = async () => {
  return await goitAPI.get('/contacts');
};

export const contactsAddNew = async ({ name, number }) => {
  return await goitAPI.post('/contacts', { name, number });
};

export const contactsDeleteById = async ({ id }) => {
  return await goitAPI.delete(`/contacts/${id}`);
};

export const contactsPatch = async ({ id, name, number }) => {
  return await goitAPI.patch(`/contacts/${id}`, { name, number });
};

const contactsApi = {
  goitAPI,
  setAuthHeader,
  removeAuthHeader,
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
