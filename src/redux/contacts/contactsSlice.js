import { createSlice } from '@reduxjs/toolkit';
import { addContact, getContacts, deleteContact } from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  contactsInfo: [],
  isLoading: false,
  error: null,
  contactIsAdded: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addedContact(state) {
      state.contactIsAdded = false;
      console.log(`Im work`);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        // return { ...state, contactsInfo: action.payload, isLoading: false };
        state.contactsInfo = action.payload;

        state.isLoading = false;
      })
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.rejected, handleRejected)
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.contactIsAdded = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactIsAdded = true;
        state.contactsInfo.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contactsInfo.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contactsInfo.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addedContact } = contactsSlice.actions;
