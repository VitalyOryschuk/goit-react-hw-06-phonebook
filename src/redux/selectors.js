import { createSelector } from 'reselect';

export const getContacts = store => store.contacts.contacts;
export const getFilter = store => store.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, searchValue) =>
    contacts.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase())),
);
export const getNotifyText = store => store.notify;
