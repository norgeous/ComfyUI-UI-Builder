import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa6';

const AccordionContainer = styled.section`
  overflow-y: auto;
  flex-grow: 1;
  padding: 8px;
`;

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
  transform: ${({ isOpen }) => (isOpen ? 'none' : 'rotate(180deg)')};
  transition: transform 350ms;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Wrapper2 = styled.div`
  width: 100%;
`;

const Collapse = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  transition: max-height 350ms;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 16px;
`;

const AccordionSection = ({ title = '', children = null }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <AccordionHeader onClick={toggle}>
        {title}
        <Chevron isOpen={isOpen} />
      </AccordionHeader>
      <Wrapper>
        <Wrapper2>
          <Collapse isOpen={isOpen}>
            <Grid>{children}</Grid>
          </Collapse>
        </Wrapper2>
      </Wrapper>
    </>
  );
};

AccordionSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const Accordion = ({ items = [] }) => {
  const sections = items.reduce((acc, { group, component }) => {
    const previousChildrenInGroup =
      acc.find(({ title }) => title === group)?.children || [];

    return [
      ...acc.filter(({ title }) => title !== group),
      {
        title: group,
        children: [...previousChildrenInGroup, component],
      },
    ];
  }, []);

  return (
    <AccordionContainer>
      {sections?.map(({ title, children }) => (
        <AccordionSection key={title} title={title}>
          {children}
        </AccordionSection>
      ))}
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      group: PropTypes.string,
      component: PropTypes.node,
    }),
  ),
};

export default Accordion;
