import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: block;
  accent-color: var(--input-outline);
  margin: 0;
`;

export default Checkbox;
