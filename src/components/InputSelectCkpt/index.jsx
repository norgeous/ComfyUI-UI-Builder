import { useContext } from 'react';
import PropTypes from 'prop-types';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import InputText from '@/components/InputText2';
import Tooltip from '@/components/Tooltip';
import { SpinnerIcon, WarningIcon } from '@/components/Icons';

const InputSelectCkpt = ({
  id = undefined,
  value = undefined,
  children = null,
  ...props
}) => {
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
      {children}
    </InputText>
  );
};

InputSelectCkpt.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
};

export default InputSelectCkpt;
