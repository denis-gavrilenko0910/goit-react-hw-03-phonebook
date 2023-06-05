import { Component } from 'react';
import { Container } from '../Container/Container';

const PHONEBOOK_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...PHONEBOOK_STATE };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState(PHONEBOOK_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <input
            id="number"
            name="number"
            type="tel"
            value={number}
            placeholder="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
          <button onSubmit={this.onHandleSubmit}>Add Contact</button>
        </form>
      </Container>
    );
  }
}
