import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useFloating, offset, flip, shift, arrow } from '@floating-ui/react';
import { Arrow, TooltipText, TooltipWrap } from './styled';

const Tooltip = ({
  className = undefined,
  text = undefined,
  wide = false,
  lm = false,
  children = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    placement: 'top',
    middleware: [
      offset(14),
      flip(),
      shift({ padding: 14 }),
      arrow({ element: arrowRef }),
    ],
    open: isOpen,
    onOpenChange: setIsOpen,
  });

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
      {isOpen && (
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
  text: PropTypes.string,
  wide: PropTypes.bool,
  children: PropTypes.node,
};

export default Tooltip;
