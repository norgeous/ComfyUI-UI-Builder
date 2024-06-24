import { useContext } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import deepEqual from '@/utils/deepEqual';
import Layout from '@/components/Layout';
import InputHeader from '@/components/InputHeader';
import { Label, Checkbox } from './styled';

const InputCheckbox = ({
  id = undefined,
  label = undefined,
  info = undefined,
  value = undefined,
  onChange = () => {},
  options = [],
  children = null,
}) => {
  const ref = useContext(InputRefContext);

  const index = options.findIndex(
    option => option.value === value || deepEqual(option.value, value),
  );

  const { label: checkboxLabel } = options[index];

  return (
    <Layout pad column gap="sm">
      <InputHeader id={id} label={label} info={info}>
        {children}
      </InputHeader>
      <Label>
        <Checkbox
          ref={ref}
          checked={Boolean(index)}
          onChange={event =>
            onChange(options[Number(event.currentTarget.checked)].value)
          }
        />{' '}
        {checkboxLabel}
      </Label>
    </Layout>
  );
};

InputCheckbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    }),
  ),
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default InputCheckbox;
