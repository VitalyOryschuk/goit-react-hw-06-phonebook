import React, { Component } from 'react';
import shortid from 'shortid';
import styles from './SearchForm.module.css';

const INIT_STATE = { name: '', number: '' };

class SearchForm extends Component {
  state = {
    ...INIT_STATE,
  };

  componentDidMount() {
    const contactsFromLS = localStorage.getItem('contacts');
    if (contactsFromLS) {
      const { setContactsFromLS } = this.props;
      setContactsFromLS(JSON.parse(contactsFromLS));
    }
  }

  nameInputId = shortid.generate();

  numberInputId = shortid.generate();

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts, showNotifyMessage } = this.props;

    const isPresentContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    let message;

    const hideNotify = () => {
      showNotifyMessage(message);
      setTimeout(() => showNotifyMessage(''), 1500);
    };

    if (isPresentContact) {
      message = `${name} is already in contacts`;
      hideNotify();
    } else if (name && number) {
      this.props.onChangeSubmit({
        id: shortid.generate(),
        name: this.state.name,
        number: Number(this.state.number),
      });
    } else {
      message = 'Fill in the field please!';
      hideNotify();
    }

    this.reset();
  };

  reset = () => {
    this.setState({
      ...INIT_STATE,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              className={styles.input}
              placeholder="Add Contact"
              type="text"
              value={name}
              onChange={this.handleChange}
              id={this.nameInputId}
              name="name"
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              className={styles.input}
              placeholder="Add phone"
              type="number"
              value={number}
              onChange={this.handleChange}
              id={this.numberInputId}
              name="number"
            />
          </label>
          <button className={styles.button} type="submit">
            Add contacts
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
