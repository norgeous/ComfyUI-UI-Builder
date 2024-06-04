import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import Checkbox from '@/components/Checkbox/Checkbox';

const HeaderCheckbox = ({
  id = undefined,
  label = undefined,
  value = undefined,
  updateFormState = () => {},
}) => (
  <Tooltip text={label}>
    <Checkbox
      checked={value}
      onChange={event => updateFormState({ [id]: event.target.checked })}
    />
  </Tooltip>
);

HeaderCheckbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.bool,
  updateFormState: PropTypes.func,
};

export default HeaderCheckbox;
