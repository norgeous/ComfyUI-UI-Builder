import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronIcon } from '@/components/Icons';
import {
  CollapsableContainer,
  CollapsableHeader,
  Collapse,
  HeaderText,
  Inner,
  Padding,
} from './styled';

const Collapsable = ({ title = '', defaultIsOpen = true, children = null }) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <CollapsableContainer>
      <CollapsableHeader onClick={onClick}>
        <HeaderText>{title}</HeaderText>
        <ChevronIcon $isOpen={isOpen} />
      </CollapsableHeader>
      <Collapse $isOpen={isOpen}>
        <Inner $isOpen={isOpen}>
          <Padding>{children}</Padding>
        </Inner>
      </Collapse>
    </CollapsableContainer>
  );
};

Collapsable.propTypes = {
  title: PropTypes.string,
  defaultIsOpen: PropTypes.bool,
  children: PropTypes.node,
};

export default Collapsable;
