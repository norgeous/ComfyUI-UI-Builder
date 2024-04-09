import PropTypes from 'prop-types';
import Select from './Select';
import useAppContext from '../../hooks/useAppContext';

const SelectCkpt = ({ name, ...props }) => {
  const { objectInfo } = useAppContext();

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
      options={options}
    />
  );
};

SelectCkpt.defaultProps = {
  name: undefined,
};

SelectCkpt.propTypes = {
  name: PropTypes.string,
};

export default SelectCkpt;
