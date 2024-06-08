import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Btn = styled.button.attrs({ type: 'button' })`
  background: var(--input-outline);
  margin: 0;
  border: none;
  display: block;
  ${({ wide }) =>
    wide &&
    css`
      width: 100%;
    `}
  border-radius: var(--radius);
  padding: 8px 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 4px;
`;

const Button = ({ isLoading = false, children = null, ...props }) => (
  <Btn
    {...props} // eslint-disable-line react/jsx-props-no-spreading
  >
    {children}
    {isLoading && 'LOADING...'}
  </Btn>
);

Button.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
