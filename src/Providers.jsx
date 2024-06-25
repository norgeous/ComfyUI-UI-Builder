import PropTypes from 'prop-types';
import Pyramid from '@/components/Pyramid';
import ComfyBridgeProvider from '@/contexts/ComfyBridgeProvider';

import ConfigsProvider from '@/contexts/ConfigsProvider';
import FormProvider from '@/contexts/FormProvider';
import SpeechProvider from '@/contexts/SpeechProvider';
import AppProvider from '@/contexts/AppProvider';

const Providers = ({ children = null }) => (
  <Pyramid>
    <ComfyBridgeProvider />
    <ConfigsProvider />
    <FormProvider />
    <SpeechProvider />
    <AppProvider />
    {children}
  </Pyramid>
);

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
