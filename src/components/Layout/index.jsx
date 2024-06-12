import PropTypes from 'prop-types';
import { Flex } from './styled';

const Layout = ({ pad = true, column = false, children = null }) => (
  <Flex $pad={pad} $column={column}>
    {children}
  </Flex>
);

Layout.propTypes = {
  pad: PropTypes.bool,
  column: PropTypes.bool,
  children: PropTypes.node,
};

export default Layout;
