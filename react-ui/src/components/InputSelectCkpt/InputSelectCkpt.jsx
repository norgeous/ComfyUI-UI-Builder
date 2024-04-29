import { useContext } from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText/InputText';
import { ObjectInfoContext } from '../../contexts/ObjectInfoContext';

const InputSelectCkpt = ({ id = undefined, value = undefined, ...props }) => {
  const { objectInfo } = useContext(ObjectInfoContext);

  const ckptOptions =
    objectInfo?.CheckpointLoaderSimple.input.required.ckpt_name[0];
  // .map(
  //   ckptName => ({
  //     label: ckptName,
  //     value: ckptName,
  //   }),
  // );

  return (
    <InputText
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      id={id}
      value={value}
      options={ckptOptions || []}
    />
  );
};

InputSelectCkpt.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
};

export default InputSelectCkpt;
