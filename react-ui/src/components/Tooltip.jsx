import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  useFloating,
  offset,
  flip,
  shift,
  arrow,
  FloatingArrow,
} from '@floating-ui/react';

const TooltipText = styled.span`
  position: absolute;
  font-size: 0.75rem; // 12px
  background: var(--page-bg);
  color: var(--page-fg);
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-top: 5px;
  transform: translate(-50%);
  white-space: preserve-breaks;
`;

const Arrow = styled(FloatingArrow)`
  fill: var(--page-bg);
`;

const Tooltip = ({
  className = undefined,
  text = undefined,
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
      <div
        className={className}
        ref={refs.setReference}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </div>
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
  children: PropTypes.node,
};

export default Tooltip;
