import { combineReducers } from 'redux';
import * as reducer from './contactsApp/contactsAppReducer';
import filterReducer from './filter/filterReducer';

const rootReducer = combineReducers({
  contacts: reducer.contactReducer,
  filter: filterReducer,
  notify: reducer.notifyReducer,
});

export default rootReducer;
