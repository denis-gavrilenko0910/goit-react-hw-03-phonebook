import PropTypes from 'prop-types';
import { Container } from '../Container/Container';

export const Filter = ({ filter, addFilter }) => {
  // console.log(addFilter);

  return (
    <Container>
      <input
        type="text"
        name={filter}
        value={filter}
        placeholder="search"
        onChange={addFilter}
      />
    </Container>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  addFilter: PropTypes.func.isRequired,
};
