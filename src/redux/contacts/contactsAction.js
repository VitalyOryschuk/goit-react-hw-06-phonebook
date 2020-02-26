// toolkit
import { createAction } from '@reduxjs/toolkit';
import * as types from './contactsTypes';

export const addContactAction = createAction(types.ADD_CONTACT);
export const removeContactAction = createAction(types.REMOVE_CONTACT);
export const setContactsToLocalStorage = createAction(types.SET_TO_LOCAL_STORAGE);
export const showNotify = createAction(types.SHOW_NOTIFY);

// import * as types from './contactsAppTypes';

// export const addContactAction = data => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     contact: data,
//   },
// });

// export const removeContactAction = id => ({
//   type: types.REMOVE_CONTACT,
//   payload: {
//     id: id,
//   },
// });

// export const setContactsToLocalStorage = contact => ({
//   type: types.SET_TO_LOCAL_STORAGE,
//   payload: {
//     contact: contact,
//   },
// });

// export const showNotify = text => ({
//   type: types.SHOW_NOTIFY,
//   payload: {
//     text,
//   },
// });
