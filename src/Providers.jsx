import PropTypes from 'prop-types';
import Pyramid from '@/components/Pyramid';
import ComfyBridgeProvider from '@ui-builder/comfybridge/react/ComfyBridgeProvider';
import ConfigsProvider from '@/contexts/ConfigsProvider';
import FormProvider from '@/contexts/FormProvider';
import SpeechProvider from '@/contexts/SpeechProvider';

const Providers = ({ children = null }) => (
  <Pyramid>
    <ComfyBridgeProvider />
    <ConfigsProvider />
    <FormProvider />
    <SpeechProvider />
    {children}
  </Pyramid>
);

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
