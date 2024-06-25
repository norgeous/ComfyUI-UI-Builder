import PropTypes from 'prop-types';
import { Flex } from './styled';

const Layout = ({
  pad = false,
  column = false,
  gap = undefined,
  center = false,
  vscroll = false,
  bgfg = undefined,
  children = null,
  ...props
}) => (
  <Flex
    {...props} // eslint-disable-line react/jsx-props-no-spreading
    $pad={pad}
    $column={column}
    $gap={gap}
    $center={center}
    $vscroll={vscroll}
    $bgfg={bgfg}
  >
    {children}
  </Flex>
);

Layout.propTypes = {
  pad: PropTypes.bool,
  column: PropTypes.bool,
  gap: PropTypes.oneOf(['sm', 'md']),
  center: PropTypes.bool,
  vscroll: PropTypes.bool,
  bgfg: PropTypes.number,
  children: PropTypes.node,
};

export default Layout;
