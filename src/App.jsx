import React, { Component } from 'react';
import Section from './components/Section/Section';
import ContactsEditor from './components/ContactsEditor/ContactsEditor';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import contacts from './data/contacts.json';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  createContact = ({ name, number }) => {
    const addNewContact = {
      id: nanoid(5),
      name,
      number,
    };

    const isDuplicate = this.state.contacts.find(
      contact => contact.name === name
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

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

// import React, { Component } from 'react';

// import Container from './components/Container/Container';
// import ContactsEditor from './components/ContactsEditor/ContactsEditor';
// import ContactsList from './components/ContactsList/ContactsList';

// import Filter from './components/Filter/Filter';

// import contacts from './data/contacts.json';

// import { nanoid } from 'nanoid';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   createContact = (name, number) => {
//     const addNewContact = {
//       id: nanoid(5),
//       name,
//       number,
//     };

//     const duplicateContacts = this.state.contacts.find(
//       contact =>
//         contact.name.toLowerCase() === name.toLowerCase() ||
//         contact.number === number
//     );

//     if (duplicateContacts) {
//       alert(`${name} is already in contact`);
//       return;
//     }

//     this.setState(({ contacts }) => ({
//       contacts: [addNewContact, ...contacts],
//     }));
//   };

//   handleDelete = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;

//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <Container title="PhoneBook">
//         <ContactsEditor onSubmit={this.createContact} />

//         <Filter value={filter} onChange={this.changeFilter} />

//         <ContactsList
//           contacts={filteredContacts}
//           handleDelete={this.handleDelete}
//         />
//       </Container>
//     );
//   }
// }
// export default App;
