// toolkit;
import { createReducer } from '@reduxjs/toolkit';
import * as types from './contactsAppTypes';

const initial = {
  contacts: [],
};

export const contactReducer = createReducer(initial, {
  [types.ADD_CONTACT]: (state, action) => {
    const addContact = [action.payload, ...state.contacts];
    localStorage.setItem('contacts', JSON.stringify(addContact));
    return { ...state, contacts: addContact };
  },
  [types.REMOVE_CONTACT]: (state, action) => {
    const removeContact = state.contacts.filter(el => el.id !== action.payload);
    localStorage.setItem('contacts', JSON.stringify(removeContact));
    return { ...state, contacts: removeContact };
  },
  [types.SET_TO_LOCAL_STORAGE]: (state, action) => ({
    contacts: action.payload,
  }),
});

export const notifyReducer = createReducer('', {
  [types.SHOW_NOTIFY]: (state, action) => {
    return action.payload;
  },
});

// import * as types from './contactsAppTypes';

// const initial = {
//   contacts: [],
// };

// export const contactReducer = (state = initial, { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT: {
//       const addContact = [payload.contact, ...state.contacts];
//       localStorage.setItem('contacts', JSON.stringify(addContact));
//       return { contacts: addContact };
//     }
//     case types.REMOVE_CONTACT: {
//       const removeContact = state.contacts.filter(el => el.id !== payload.id);
//       localStorage.setItem('contacts', JSON.stringify(removeContact));
//       return { contacts: removeContact };
//     }
//     case types.SET_TO_LOCAL_STORAGE: {
//       return { contacts: payload.contact };
//     }
//     default:
//       return state;
//   }
// };

// export const notifyReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.SHOW_NOTIFY:
//       return payload.text;

//     default:
//       return state;
//   }
// };
