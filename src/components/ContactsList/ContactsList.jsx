import React from 'react';
import T from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from './Contact';

import styles from './ContactsList.module.css';
import pop from './pop.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <TransitionGroup component="ul" className={styles.contactList}>
    {contacts.map(contact => (
      <CSSTransition
        key={contact.id}
        timeout={{ enter: 750, exit: 850 }}
        unmountOnExit
        classNames={pop}
      >
        <li className={styles.ContactsListItem} key={contact.id}>
          <Contact
            contact={contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactsList.propTypes = {
  contacts: T.arrayOf(T.shape({})).isRequired,
  onDeleteContact: T.func.isRequired,
};

export default ContactsList;
