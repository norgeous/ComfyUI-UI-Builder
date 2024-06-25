import { useContext } from 'react';
import ComfyBridgeContext from '@/contexts/ComfyBridgeContext';
import FormHeader from '@/components/FormHeader';
import FormBuilder from '@/components/FormBuilder';
import FormControls from '@/components/FormControls';
import Layout from '@/components/Layout';
import QueueItem from '../QueueItem';

const Sidebar = () => {
  const { data } = useContext(ComfyBridgeContext);

  return (
    <Layout column bgfg={1} as="aside">
      <Layout column bgfg={2} as="header">
        <FormHeader />
      </Layout>
      <Layout pad column gap="md" vscroll bgfg={1}>
        <FormBuilder />
      </Layout>
      {!!data.queue.length && (
        <Layout
          pad
          column
          gap="md"
          vscroll
          bgfg={2}
          style={{ flexGrow: 0, flexShrink: 0, maxHeight: 80 }}
        >
          {data.queue.toReversed().map(item => (
            <QueueItem key={item.id} {...item} /> // eslint-disable-line react/jsx-props-no-spreading
          ))}
        </Layout>
      )}
      <Layout pad column gap="md" bgfg={2} as="footer">
        <FormControls />
      </Layout>
    </Layout>
  );
};
export default Sidebar;
