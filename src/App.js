import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Contacts from './components/contact/Contacts';
import ContactForm from './components/contact/ContactForm';

class App extends Component {
  state = {
    contacts: [
      {id: 1, firstName: 'Bob', phone: '123-123-1234'},
      {id: 2, firstName: 'Jill', phone: '323-113-1234'},
      {id: 3, firstName: 'Rocky', phone: '312-112-1134'}
    ]
  }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addContact = (contactData) => {
    let newContact = { id: this.getId(), ...contactData }
    this.setState({ contacts: [newContact, ...this.state.contacts ]})
  }

  removeContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
      if (contact.id !== id ) 
        return contact
    })
    this.setState({ contacts: [...contacts ] })
  }

  render() {
    const { contacts } = this.state 
    return (
      <Container>
        <Header as='h1' color='purple'>Contact List</Header>
        <ContactForm add={this.addContact} />
        <Contacts contacts={contacts} remove={this.removeContact}  />
      </Container>
    )
  }
}

export default App;