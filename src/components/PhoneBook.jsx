import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import T from 'prop-types';
// components
import SearchForm from './SearchForm/SearchFormContainer';
import ContactsList from './ContactsList/ContactListContainer';
import Notify from './Notify/Notify';
import Filter from './Filter/FilterContainer';
// transition
import '../transition/fade.css';
import '../transition/slide.css';
import message from '../transition/message.module.css';
import pop from '../transition/pop.module.css';
// css
import styles from './style.module.css';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors';

const PhoneBook = ({ contacts, text }) => {
  return (
    <CSSTransition in timeout={1000} classNames="fade" appear>
      <div className={styles.container}>
        <CSSTransition in timeout={2000} classNames="slide" appear>
          <h2 className={styles.title}>PhoneBook</h2>
        </CSSTransition>
        <TransitionGroup>
          {text && (
            <CSSTransition
              timeout={{ enter: 250, exit: 750 }}
              classNames={message}
              unmountOnExit
            >
              <Notify message={text} />
            </CSSTransition>
          )}
        </TransitionGroup>
        <SearchForm />
        {contacts.length > 0 && <h2 className={styles.title}>Contacts</h2>}
        <TransitionGroup>
          {contacts.length > 1 && (
            <CSSTransition timeout={{ enter: 250, exit: 1000 }} classNames={pop}>
              <Filter />
            </CSSTransition>
          )}
        </TransitionGroup>
        <ContactsList />
      </div>
    </CSSTransition>
  );
};

PhoneBook.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      name: T.string.isRequired,
      number: T.number.isRequired,
      id: T.string.isRequired,
    }),
  ).isRequired,
  text: T.string.isRequired,
};

const mapStateToProps = store => ({
  contacts: selectors.getContacts(store),
  text: selectors.getNotifyText(store),
});

export default connect(mapStateToProps, null)(PhoneBook);
