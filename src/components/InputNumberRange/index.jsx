import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import InputNumber from '@/components/InputNumber';
import InputRange from '@/components/InputRange';
import { EditIcon } from '@/components/Icons';
import HeaderButton from '@/components/HeaderButton';

const EditButton = ({ label = undefined, onClick = () => {} }) => (
  <HeaderButton label={label} onClick={onClick}>
    <EditIcon />
  </HeaderButton>
);

EditButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
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

  const editLabel = isRange ? 'Edit number' : 'Return to range slider';

  return isRange ? (
    <InputRange
      id={id}
      label={label}
      info={info}
      value={value}
      onChange={onChange}
      options={options}
    >
      <EditButton label={editLabel} onClick={toggleIsRange} />
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
      <EditButton label={editLabel} onClick={toggleIsRange} />
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
