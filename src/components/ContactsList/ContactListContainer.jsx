import { connect } from 'react-redux';
import * as contactActions from '../../redux/contacts/contactsAction';
import * as selectors from '../../redux/selectors';
import ContactsList from './ContactsList';

const mapStateToProps = store => ({
  contacts: selectors.getFilteredContacts(store),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactActions.removeContactAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
