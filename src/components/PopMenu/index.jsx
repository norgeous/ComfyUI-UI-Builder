import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  useFloating,
  flip,
  shift,
  useDismiss,
  useInteractions,
  autoPlacement,
} from '@floating-ui/react';
import { Button, Menu, MenuItem } from './styled';

const PopMenu = ({
  className = undefined,
  children = null,
  options = [],
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    placement: 'auto',
    middleware: [autoPlacement(), flip(), shift({ padding: 14 })],
    open: isOpen,
    onOpenChange: newIsOpen => {
      setIsOpen(newIsOpen);
    },
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  return (
    <>
      <Button
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        className={className}
        ref={refs.setReference}
        onClick={() => setIsOpen(!isOpen)}
        {...getReferenceProps()} // eslint-disable-line react/jsx-props-no-spreading
      >
        {children}
      </Button>
      {isOpen && (
        <Menu
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()} // eslint-disable-line react/jsx-props-no-spreading
        >
          {options.map(({ label, onClick }) => (
            <div key={label}>
              <MenuItem onClick={onClick}>{label}</MenuItem>
            </div>
          ))}
        </Menu>
      )}
    </>
  );
};

PopMenu.propTypes = {
  className: PropTypes.string,
  lm: PropTypes.bool,
  wide: PropTypes.bool,
  children: PropTypes.node,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
};

export default PopMenu;
