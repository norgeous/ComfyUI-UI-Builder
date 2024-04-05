import useAppContext from '../../hooks/useAppContext';
import Select from './Select';

// eslint-disable-next-line react/prop-types
const SelectCkpt = ({ name, ...props }) => {
  const { objectInfo } = useAppContext();

  const ckptOptions = objectInfo?.['CheckpointLoaderSimple'].input.required.ckpt_name[0].map((ckptName) => ({
    label: ckptName,
    [name]: ckptName,
  }));

  const options = [
    { label: '-- undefined --', [name]: '' },
    ...ckptOptions || [],
  ];

  return <Select {...props} name={name} options={options} />
};

export default SelectCkpt;
