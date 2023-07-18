import React, { Component } from 'react';
import { Section, ContactsList, ContactsEditor, Filter } from 'components';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createContact = ({ name, number }) => {
    const isDuplicate = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const addNewContact = {
      id: nanoid(5),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [addNewContact, ...contacts],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Section title="PhoneBook">
          <ContactsEditor onSubmit={this.createContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={filteredContacts}
            handleDelete={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}
export default App;
