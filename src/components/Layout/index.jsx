import PropTypes from 'prop-types';
import { Flex } from './styled';

const Layout = ({
  pad = false,
  column = false,
  gap = undefined,
  center = false,
  scrollable = false,
  bgfg = undefined,
  fullHeight = false,
  children = null,
  ...props
}) => (
  <Flex
    {...props} // eslint-disable-line react/jsx-props-no-spreading
    $pad={pad}
    $column={column}
    $gap={gap}
    $center={center}
    $scrollable={scrollable}
    $bgfg={bgfg}
    $fullHeight={fullHeight}
  >
    {children}
  </Flex>
);

Layout.propTypes = {
  pad: PropTypes.bool,
  column: PropTypes.bool,
  gap: PropTypes.oneOf(['sm', 'md']),
  center: PropTypes.bool,
  scrollable: PropTypes.bool,
  bgfg: PropTypes.number,
  fullHeight: PropTypes.bool,
  children: PropTypes.node,
};

export default Layout;
