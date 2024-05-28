import Pyramid from './components/Pyramid';

import ClientIdProvider from './contexts/ClientIdProvider';
import ConfigsProvider from './contexts/ConfigsProvider';
import FormProvider from './contexts/FormProvider';
import ObjectInfoProvider from './contexts/ObjectInfoProvider';
import WsProvider from './contexts/WsProvider';
import AppProvider from './contexts/AppProvider';
import SpeechProvider from './contexts/SpeechProvider';

const Providers = ({ children }) => (
  <Pyramid>
    <ConfigsProvider />
    <ClientIdProvider />
    <WsProvider />
    <ObjectInfoProvider />
    <FormProvider />
    <AppProvider />
    <SpeechProvider />
    {children}
  </Pyramid>
);

export default Providers;
