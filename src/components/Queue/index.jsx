import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import QueueItem from '@/components/QueueItem';

const Queue = ({ items = [] }) => (
  <Layout pad gap="md" scrollable bgfg={2} style={{ flexGrow: 0 }}>
    {items.map(item => (
      <QueueItem
        key={item.promptId}
        {...item} // eslint-disable-line react/jsx-props-no-spreading
      />
    ))}
  </Layout>
);

Queue.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Queue;
