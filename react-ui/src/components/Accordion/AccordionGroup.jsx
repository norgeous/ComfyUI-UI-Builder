import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaChevronUp } from 'react-icons/fa6';

const AccordionHeader = styled.button`
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
`;

const HeaderText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Chevron = styled(FaChevronUp)`
  display: block;
  transition: transform 350ms;
  transform: ${({ $isOpen }) => ($isOpen ? 'none' : 'rotate(180deg)')};
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

const AccordionGroup = ({
  title = '',
  defaultIsOpen = true,
  children = null,
}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <>
      <AccordionHeader onClick={onClick}>
        <HeaderText>{title}</HeaderText>
        <Chevron $isOpen={isOpen} />
      </AccordionHeader>
      <Collapse $isOpen={isOpen}>
        <Inner>{children}</Inner>
      </Collapse>
    </>
  );
};

AccordionGroup.propTypes = {
  title: PropTypes.string,
  defaultIsOpen: PropTypes.bool,
  children: PropTypes.node,
};

export default AccordionGroup;
