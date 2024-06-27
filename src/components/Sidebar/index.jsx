import { useContext } from 'react';
import ComfyBridgeContext from '@/contexts/ComfyBridgeContext';
import Layout from '@/components/Layout';
import FormHeader from '@/components/FormHeader';
import FormBuilder from '@/components/FormBuilder';
import FormControls from '@/components/FormControls';
import QueueItem from '@/components/QueueItem';

const Sidebar = () => {
  const { data } = useContext(ComfyBridgeContext);

  return (
    <Layout as="aside" column fullHeight bgfg={1}>
      <Layout as="header" column bgfg={2}>
        <FormHeader />
      </Layout>

      <FormBuilder />

      {!!data.queue.length && (
        <Layout
          pad
          column
          gap="md"
          scrollable
          bgfg={2}
          style={{ flexGrow: 0, flexShrink: 0, maxHeight: 80 }}
        >
          {data.queue.toReversed().map(item => (
            <QueueItem key={item.id} {...item} /> // eslint-disable-line react/jsx-props-no-spreading
          ))}
        </Layout>
      )}
      <Layout as="footer" pad column gap="md" bgfg={2}>
        <FormControls />
      </Layout>
    </Layout>
  );
};
export default Sidebar;
