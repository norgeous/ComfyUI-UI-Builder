import PropTypes from 'prop-types';
import { Flex } from './styled';

const Layout = ({
  pad = false,
  column = false,
  gap = undefined,
  center = false,
  children = null,
}) => (
  <Flex $pad={pad} $column={column} $gap={gap} $center={center}>
    {children}
  </Flex>
);

Layout.propTypes = {
  pad: PropTypes.bool,
  column: PropTypes.bool,
  gap: PropTypes.oneOf(['sm']),
  center: PropTypes.bool,
  children: PropTypes.node,
};

export default Layout;
