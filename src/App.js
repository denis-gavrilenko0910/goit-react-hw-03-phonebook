import { Component } from 'react';
import { Filter } from './Components/Filter';
import { ContactForm } from './Components/ContactForm';
import { Section } from './Components/Section';
import { ContactsList } from './Components/ContactsList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitHandler = (data) => {
    const { contacts } = this.state;
    const checkIdentity = data.name.toLocaleLowerCase();
    if (contacts.find((el) => el.name.toLocaleLowerCase() === checkIdentity)) {
      return alert('the contact is already exists!');
    }

    this.setState((prevState) => ({
      contacts: [{ id: nanoid(), ...data }, ...prevState.contacts],
    }));
  };

  handleFilterName = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  setFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const contactNameToLowerCase = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLocaleLowerCase().includes(contactNameToLowerCase);
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.setFilteredContacts();

    return (
      <Section>
        <ContactForm onSubmit={this.onSubmitHandler} />
        <Filter filter={filter} addFilter={this.handleFilterName} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}

export default App;
