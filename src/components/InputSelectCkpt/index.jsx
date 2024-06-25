import { useContext } from 'react';
import PropTypes from 'prop-types';
import ComfyBridgeContext from '@/contexts/ComfyBridgeContext';
import Layout from '@/components/Layout';
import InputText from '@/components/InputText';
import ErrorText from '@/components/ErrorText';

const InputSelectCkpt = ({ id = undefined, value = undefined, ...props }) => {
  const { objectInfo } = useContext(ComfyBridgeContext);

  const ckptOptions =
    objectInfo?.data?.CheckpointLoaderSimple.input.required.ckpt_name[0];

  return (
    <Layout pad column gap="sm">
      <InputText
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        id={id}
        value={value}
        options={ckptOptions || []}
      />
      {objectInfo?.loading && 'LOADING'}
      {!ckptOptions && <ErrorText>No checkpoints available</ErrorText>}
    </Layout>
  );
};

InputSelectCkpt.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
};

export default InputSelectCkpt;
