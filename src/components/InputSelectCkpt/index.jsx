import { useContext } from 'react';
import PropTypes from 'prop-types';
import ComfyBridgeContext from '@/contexts/ComfyBridgeContext';
import InputText from '@/components/InputText';
import Tooltip from '@/components/Tooltip';
import { SpinnerIcon, WarningIcon } from '@/components/Icons';

const InputSelectCkpt = ({ id = undefined, value = undefined, ...props }) => {
  const { data } = useContext(ComfyBridgeContext);

  const ckptOptions =
    data.objectInfo?.data?.CheckpointLoaderSimple.input.required.ckpt_name[0];

  return (
    <InputText
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      id={id}
      value={value}
      options={ckptOptions || []}
    >
      {!ckptOptions && (
        <Tooltip text="No checkpoints available">
          <WarningIcon />
        </Tooltip>
      )}
      {data.objectInfo?.loading && <SpinnerIcon />}
    </InputText>
  );
};

InputSelectCkpt.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
};

export default InputSelectCkpt;
