import { useContext } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import { ObjectInfoContext } from '../../contexts/ObjectInfoContext';

const SelectCkpt = ({ name, value, ...props }) => {
  const { objectInfo } = useContext(ObjectInfoContext);

  const ckptOptions = objectInfo
    ?.CheckpointLoaderSimple
    .input
    .required
    .ckpt_name[0].map((ckptName) => ({
      label: ckptName,
      [name]: ckptName,
    }));

  const options = [
    { label: '-- undefined --', [name]: '' },
    ...ckptOptions || [],
  ];

  return (
    <Select
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      name={name}
      value={options.map((option) => option[name]).indexOf(value)}
      options={options}
    />
  );
};

SelectCkpt.defaultProps = {
  name: undefined,
  value: undefined,
};

SelectCkpt.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default SelectCkpt;
