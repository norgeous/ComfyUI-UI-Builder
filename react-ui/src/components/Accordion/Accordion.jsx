import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AccordionContainer = styled.section`
  overflow-y: auto;
  flex-grow: 1;
  padding: 16px;
`;

const AccordionHeader = styled.button`
  background: black;
  color: white;
  border: 1px solid red;
  width: 100%;
  display: block;
  padding: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 8px;
  border: 1px solid red;
`;

const AccordionSection = ({ title = '', children = null }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <AccordionHeader onClick={toggle}>
        {title} ({isOpen ? 'open' : 'closed'})
      </AccordionHeader>
      {isOpen && <Grid>{children}</Grid>}
    </div>
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
