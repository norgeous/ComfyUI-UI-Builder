import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Btn = styled.button.attrs({ type: 'button' })`
  background: var(--input-outline);
  margin: 0;
  border: none;
  ${({ $wide }) =>
    $wide &&
    css`
      width: 100%;
    `}
  border-radius: var(--radius);
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 4px;
`;

const Button = ({ children = null, ...props }) => (
  <Btn
    {...props} // eslint-disable-line react/jsx-props-no-spreading
  >
    {children}
  </Btn>
);

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
