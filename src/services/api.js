import axios from 'axios';

export const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const goitSignup = async ({ name, email, password }) => {
  return await goitAPI.post('/users/signup', {
    name,
    email,
    password,
  });
};

export const goitLogin = async ({ email, password }) => {
  return await goitAPI.post('/users/login', { email, password });
};

export const goitLogout = async () => {
  return await goitAPI.post('/users/logout');
};

export const goitRefresh = async () => {
  return await goitAPI.get('/users/current');
};

// -----------------------------------------------------

const signupUser = {
  url: '/users/signup',
  method: 'POST',
  requestBody: (name, email, password) => {
    return {
      name, //: 'Adrian Cross',
      email, //: 'across@mail.com',
      password, //: 'examplepwd12345',
    };
  },
  responses: {
    [201]: 'User created.',
    [400]: 'User creation error.',
    [500]: 'Server error.',
  },
};

const loginUser = {
  url: '/users/login',
  method: 'POST',
  requestBody: (email, password) => {
    return {
      email, //: 'string',
      password, //: 'string',
    };
  },
  responses: {
    [200]: 'User is logged in.',
    [400]: 'Login error.',
  },
};

const logoutUser = {
  url: '/users/logout',
  method: 'POST',
  headers: (token) => {
    return {
      Authorization: token,
    };
  },
  responses: {
    [200]: 'The user is logged out.',
    [401]: 'Missing header with authorization token.',
    [500]: 'Server error.',
  },
};

const currentUser = {
  url: '/users/current',
  method: 'GET',
  headers: (token) => {
    return {
      Authorization: token,
    };
  },
  responses: {
    [200]: 'Information found.',
    [401]: 'Missing header with authorization token.',
  },
};

const allContacts = {
  url: '/contacts',
  method: 'GET',
  headers: (token) => {
    return {
      Authorization: token,
    };
  },
  responses: {
    [200]: 'Contacts found.',
    [401]: 'Missing header with authorization token.',
    [404]: 'There is no such user collection.',
    [500]: 'Server error.',
  },
};

const newContact = {
  url: '/contacts',
  method: 'POST',
  headers: (token) => {
    return {
      Authorization: token,
    };
  },
  requestBody: (name, number) => {
    return {
      name, //: 'Jacob Mercer',
      number, //: '761-23-96',
    };
  },
  responses: {
    [201]: 'The contact was successfully created.',
    [400]: 'Error creating contact.',
    [401]: 'Missing header with authorization token.',
  },
};

const deleteContact = {
  url: (contactId) => `/contacts/${contactId}`,
  method: 'DELETE',
  headers: (token) => {
    return {
      Authorization: token,
    };
  },
  responses: {
    [200]: 'The contact was successfully deleted.',
    [401]: 'Missing header with authorization token.',
    [404]: 'There is no such user collection.',
    [500]: 'Server error.',
  },
};

const patchContact = {
  url: (contactId) => `/contacts/${contactId}`,
  method: 'PATCH',
  headers: (token) => {
    return {
      Authorization: token,
    };
  },
  requestBody: (name, number) => {
    return {
      name, //: 'Jacob Mercer',
      number, //: '761-23-96',
    };
  },
  responses: {
    [200]: 'The contact was successfully updated.',
    [400]: 'Contact update failed.',
    [401]: 'Missing header with authorization token.',
  },
};

const contactsApi = {
  signup: {
    signup: signupUser,
    login: loginUser,
    logout: logoutUser,
    current: currentUser,
  },
  contact: {
    all: allContacts,
    new: newContact,
    delete: deleteContact,
    patch: patchContact,
  },
};

export default contactsApi;

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
