import { useAppContext } from '../contexts/AppContext';
import Select from './Select';

const SelectCkpt = ({ ...props }) => {
  const {
    ckptOptions,
  } = useAppContext();

  return <Select {...props} options={ckptOptions} />
};

export default SelectCkpt;
