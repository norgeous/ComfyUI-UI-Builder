import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import { InputHeaderButton } from './styles';

const onOffLabeller = value => {
  if (value === true) return ' (On)';
  if (value === false) return ' (Off)';
  return '';
};

const HeaderButton = ({
  className = undefined,
  label = undefined,
  value = undefined,
  onClick = () => {},
  lm = false,
  children = null,
  ...props
}) => {
  const finalLabel = `${label}${onOffLabeller(value)}`;

  return (
    <Tooltip className={className} text={finalLabel} lm={lm}>
      <InputHeaderButton
        aria-label={finalLabel}
        onClick={() => onClick(!value)}
        value={value}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      >
        {children}
      </InputHeaderButton>
    </Tooltip>
  );
};
HeaderButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  lm: PropTypes.bool,
  value: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default HeaderButton;
