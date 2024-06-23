import PropTypes from 'prop-types';
import Pyramid from '@/components/Pyramid';
import ComfyBridgeProvider from '@/contexts/ComfyBridgeProvider';

// import ClientIdProvider from '@/contexts/ClientIdProvider';
import ConfigsProvider from '@/contexts/ConfigsProvider';
import FormProvider from '@/contexts/FormProvider';
// import ObjectInfoProvider from '@/contexts/ObjectInfoProvider';
// import WsProvider from '@/contexts/WsProvider';
import AppProvider from '@/contexts/AppProvider';
import SpeechProvider from '@/contexts/SpeechProvider';

const Providers = ({ children = null }) => (
  <Pyramid>
    <ComfyBridgeProvider />

    <ConfigsProvider />
    <FormProvider />
    <SpeechProvider />
    {/* <ClientIdProvider /> */}
    {/* <WsProvider /> */}
    {/* <ObjectInfoProvider /> */}
    <AppProvider />
    {children}
  </Pyramid>
);

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
