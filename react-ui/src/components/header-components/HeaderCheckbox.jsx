import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import Checkbox from '@/components/Checkbox/Checkbox';

const HeaderCheckbox = ({
  label = undefined,
  value = undefined,
  onChange = () => {},
}) => (
  <Tooltip text={label}>
    <Checkbox
      aria-label={label}
      checked={value}
      onChange={event => onChange(event.target.checked)}
    />
  </Tooltip>
);

HeaderCheckbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

export default HeaderCheckbox;
