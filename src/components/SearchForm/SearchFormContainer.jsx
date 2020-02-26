import { connect } from 'react-redux';
import * as contactActions from '../../redux/contacts/contactsAction';
import * as selectors from '../../redux/selectors';
import SearchForm from './SearchForm';

const mapStateToProps = store => ({
  contacts: selectors.getContacts(store),
});

const mapDispatchToProps = dispatch => ({
  onChangeSubmit: data => dispatch(contactActions.addContactAction(data)),
  showNotifyMessage: text => dispatch(contactActions.showNotify(text)),
  setContactsFromLS: contact =>
    dispatch(contactActions.setContactsToLocalStorage(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
