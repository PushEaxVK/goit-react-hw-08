import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import contactsApi from '../../services/api';

// const BASE_URL = 'https://6814d0df225ff1af162a3433.mockapi.io/';

// axios.defaults.baseURL = BASE_URL;

export const createThunk = (action, fetchData) => {
  return createAsyncThunk(action, async (body, thunkAPI) => {
    try {
      const response = await fetchData(body, thunkAPI);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
};

export const fetchContacts = createThunk('contacts/fetchAll', async () =>
  // axios.get('/contacts')
  contactsApi.contacts.contactsGetAll()
);

export const addContact = createThunk('contacts/addContact', async (contact) =>
  // axios.post('/contacts', contact)
  contactsApi.contacts.contactsAddNew(contact)
);

export const deleteContact = createThunk(
  'contacts/deleteContact',
  async (contactId) =>
    // axios.delete(`/contacts/${contactId}`)
    contactsApi.contacts.contactsDeleteById({ id: contactId })
);
