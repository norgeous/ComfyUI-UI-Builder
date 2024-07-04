import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';
import Layout from '@/components/Layout';
import FormHeader from '@/components/FormHeader';
import FormBuilder from '@/components/FormBuilder';
import FormControls from '@/components/FormControls';
import QueueItem from '@/components/QueueItem';

const Sidebar = () => {
  const { data } = useContext(ComfyBridgeContext);

  const queue = Object.entries(data.queue).map(([promptId, item]) => ({
    promptId,
    ...item,
  }));

  return (
    <Layout as="aside" column fullHeight bgfg={1}>
      <Layout as="header" column bgfg={2}>
        <FormHeader />
      </Layout>

      <FormBuilder />

      {!!queue.length && (
        <Layout
          pad
          column
          gap="md"
          scrollable
          bgfg={2}
          style={{ flexGrow: 0, flexShrink: 0, maxHeight: '50%' }}
        >
          {queue.toReversed().map(item => (
            <QueueItem key={item.promptId} {...item} /> // eslint-disable-line react/jsx-props-no-spreading
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
