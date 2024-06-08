import PropTypes from 'prop-types';
import styled from 'styled-components';
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
`;

const HeaderButton = ({
  className = undefined,
  label = undefined,
  onClick = () => {},
  children = null,
  ...props
}) => (
  <Tooltip className={className} text={label}>
    <InputHeaderButton
      aria-label={label}
      onClick={onClick}
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      {children}
    </InputHeaderButton>
  </Tooltip>
);

HeaderButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default HeaderButton;
