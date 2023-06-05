import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContactsItem } from './ContactsItem';

const StyledContactsList = styled.ul`
  padding: 0;
  width: 100%;
  max-width: 30%;
`;

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledContactsList>
      {contacts?.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <p className="contact_name">{name}</p>
            <p>{number}</p>
            <button onClick={() => onDeleteContact(id)}>Delete contact</button>
          </ContactsItem>
        );
      })}
    </StyledContactsList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
