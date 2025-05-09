import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    console.log('auth/register');
  }
);

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  console.log('auth/login');
});

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (body, thunkAPI) => {
    console.log('auth/refresh');
  }
);
