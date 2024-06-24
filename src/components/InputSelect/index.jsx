import { useContext } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import deepEqual from '@/utils/deepEqual';
import Layout from '@/components/Layout';
import InputHeader from '@/components/InputHeader';
import { Select } from './styled';

const InputSelect = ({
  id = undefined,
  label = undefined,
  info = undefined,
  options = [],
  value = undefined,
  onChange = () => {},
  children = null,
}) => {
  const ref = useContext(InputRefContext);

  const index = options.findIndex(
    option => option.value === value || deepEqual(option.value, value),
  );

  return (
    <Layout pad column gap="sm">
      <InputHeader id={id} label={label} info={info}>
        {children}
      </InputHeader>
      <Select
        ref={ref}
        id={id}
        value={index}
        onChange={event => onChange(options[event.target.value].value)}
      >
        {options.map(({ label: optionLabel }, i) => (
          <option key={optionLabel} value={String(i)}>
            {optionLabel}
          </option>
        ))}
      </Select>
    </Layout>
  );
};

InputSelect.propTypes = {
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

export default InputSelect;
