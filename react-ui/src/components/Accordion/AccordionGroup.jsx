import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaChevronUp } from 'react-icons/fa6';

const AccordionHeader = styled.button`
  background: black;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  border: none;
`;

const Chevron = styled(FaChevronUp)`
  transition: transform 350ms;
  transform: ${({ $isOpen }) => ($isOpen ? 'none' : 'rotate(180deg)')};
`;

const Collapse = styled.div`
  display: grid;
  transition: grid-template-rows 350ms;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
`;

const Inner = styled.div`
  overflow: hidden;
`;

const AccordionGroup = ({
  title = '',
  defaultIsOpen = false,
  children = null,
}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <>
      <AccordionHeader onClick={onClick}>
        {title}
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
