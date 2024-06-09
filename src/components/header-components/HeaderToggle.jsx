import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Tooltip from '@/components/Tooltip';

const InputHeaderButton = styled.button`
  cursor: pointer;
  display: block;
  border: none;
  color: inherit;
  background: transparent;
  font-size: 0.75rem; // 12px
  padding: 0;
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
    border-radius: var(--radius);
  }
  > * {
    opacity: 0.5;
  }
  &:hover > * {
    opacity: 1;
  }
  ${({ value }) =>
    value &&
    css`
      > * {
        opacity: 1;
      }
    `}
`;

const HeaderToggle = ({
  label = undefined,
  value = false,
  onChange = () => {},
  children = null,
}) => (
  <Tooltip text={label}>
    <InputHeaderButton
      aria-label={label}
      onClick={() => onChange(!value)}
      value={value}
    >
      {children}
    </InputHeaderButton>
  </Tooltip>
);

HeaderToggle.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default HeaderToggle;
