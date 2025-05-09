import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = { items: [], isLoading: false, error: null };

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const buildCase = (builder) => {
  const result = {
    addCase: (thunk, fn) => {
      return buildCase(
        builder
          .addCase(thunk.pending, handlePending)
          .addCase(thunk.fulfilled, (state, action) => {
            handleFulfilled(state);
            return fn(state, action);
          })
          .addCase(thunk.rejected, handleRejected)
      );
    },
  };
  return result;
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    buildCase(builder)
      .addCase(fetchContacts, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      });
  },
});

export default slice.reducer;
