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
  ${({ $variant }) => {
    if ($variant === 'secondary')
      return css`
        background: red;
      `;
    return undefined;
  }}
  font-size: 14px;
  line-height: 14px;
`;

const Button = ({
  wide = false,
  variant = undefined,
  children = null,
  ...props
}) => (
  <Btn
    {...props} // eslint-disable-line react/jsx-props-no-spreading
    $wide={wide}
    $variant={variant}
  >
    {children}
  </Btn>
);

Button.propTypes = {
  wide: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
