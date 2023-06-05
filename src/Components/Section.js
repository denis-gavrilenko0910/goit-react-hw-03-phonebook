import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 60px 0;
`;

export const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};
