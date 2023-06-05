import styled from 'styled-components';

const StyledContactsItem = styled.li`
  display: flex;
  .contact_name {
    margin-right: auto;
  }
`;

export const ContactsItem = ({ children }) => {
  return <StyledContactsItem>{children}</StyledContactsItem>;
};
