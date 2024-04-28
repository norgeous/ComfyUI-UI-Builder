import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

// .uk-accordion > div {
//   margin-top: 0 !important;
// }

// .uk-accordion-content {
//   padding: 15px !important;
// }

// .uk-accordion-title {
//   padding: 10px 12px;
//   border-bottom: 1px solid #394650;
//   background-color: #171d21;
// }

const AccordionContainer = styled.section`
  overflow-y: auto;
  flex-grow: 1;
`;
const AccordionHeader = styled.button`
  background: black;
  color: white;
  border: 1px solid red;
`;

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <AccordionHeader onClick={toggle}>
        {title} {isOpen ? 'open' : 'closed'}
      </AccordionHeader>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
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

Accordion.defaultProps = {
  items: [],
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
