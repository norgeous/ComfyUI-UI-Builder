import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,
} from '@floating-ui/react';
import { Arrow, TooltipText, TooltipWrap } from './styles';

const Tooltip = ({
  className = undefined,
  text = undefined,
  placement = 'top',
  wide = false,
  lm = false,
  children = null,
  hidden = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    placement,
    middleware: [
      offset(10), // includes arrow size
      flip(),
      shift({ padding: 6 }), // how far to move away from edge of screen
      arrow({ element: arrowRef }),
    ],
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
  });

  if (!text) return children;

  return (
    <>
      <TooltipWrap
        className={className}
        $wide={wide}
        $lm={lm}
        ref={refs.setReference}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </TooltipWrap>
      {isOpen && !hidden && (
        <TooltipText ref={refs.setFloating} style={floatingStyles}>
          <Arrow ref={arrowRef} context={context} />
          {text}
        </TooltipText>
      )}
    </>
  );
};

Tooltip.propTypes = {
  className: PropTypes.string,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  text: PropTypes.string,
  lm: PropTypes.bool,
  wide: PropTypes.bool,
  children: PropTypes.node,
  hidden: PropTypes.bool,
};

export default Tooltip;
