import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
