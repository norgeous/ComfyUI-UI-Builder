import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import QueueItem from '@/components/QueueItem';

const Timeline = ({ items = [] }) => (
  <Layout pad gap="md" scrollable bgfg={2} style={{ flexGrow: 0 }}>
    {items.map(item => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <QueueItem key={item.promptId} {...item} />
    ))}
  </Layout>
);

Timeline.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Timeline;
