import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import InputNumber from '@/components/InputNumber';
import InputRange from '@/components/InputRange';

import HeaderToggle from '@/components/HeaderToggle';
import { EditIcon } from '@/components/Icons';

const EditButton = ({ value = false, onChange = () => {} }) => (
  <HeaderToggle label="Edit" value={value} onChange={onChange}>
    <EditIcon />
  </HeaderToggle>
);

EditButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

const InputNumberRange = ({
  id = undefined,
  label = undefined,
  info = undefined,
  value = undefined,
  onChange = () => {},
  children = null,
  options = [],
  min = undefined,
  max = undefined,
}) => {
  const ref = useContext(InputRefContext);
  const [isRange, setIsRange] = useState(true);
  const toggleIsRange = () => {
    setIsRange(!isRange);
    setTimeout(() => ref.current.focus(), 0);
  };

  return isRange ? (
    <InputRange
      id={id}
      label={label}
      info={info}
      value={value}
      onChange={onChange}
      options={options}
    >
      <EditButton value={false} onChange={toggleIsRange} />
      {children}
    </InputRange>
  ) : (
    <InputNumber
      id={id}
      label={label}
      info={info}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    >
      <EditButton value onChange={toggleIsRange} />
      {children}
    </InputNumber>
  );
};

InputNumberRange.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.node,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    }),
  ),
  min: PropTypes.number,
  max: PropTypes.number,
};

export default InputNumberRange;
