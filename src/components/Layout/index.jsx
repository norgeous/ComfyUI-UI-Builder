import PropTypes from 'prop-types';
import { Flex } from './styled';

const Layout = ({
  pad = false,
  column = false,
  center = false,
  children = null,
}) => (
  <Flex $pad={pad} $column={column} $center={center}>
    {children}
  </Flex>
);

Layout.propTypes = {
  pad: PropTypes.bool,
  column: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.node,
};

export default Layout;
