import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ChevronIcon } from '@/components/Icons';

const CollapsableContainer = styled.div`
  border-radius: var(--radius);
  overflow: hidden;
`;

const CollapsableHeader = styled.button`
  background: var(--header-bg);
  color: var(--header-fg);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 12px;
  cursor: pointer;
  border: none;
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: -2px;
  }
`;

const HeaderText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Collapse = styled.div`
  display: grid;
  transition: grid-template-rows 350ms;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  background: var(--surface-bg);
  color: var(--surface-fg);
`;

const Inner = styled.div`
  overflow: hidden;
`;

const Padding = styled.div`
  padding: 8px;
`;

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
