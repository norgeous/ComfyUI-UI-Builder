import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AccordionGroup from './AccordionGroup';

const AccordionContainer = styled.section`
  overflow-y: auto;
  flex-grow: 1;
  padding: 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 16px;
`;

const Accordion = ({ items = [] }) => {
  const [isOpenIndex, setIsOpenIndex] = useState(0);

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
      {sections?.map(({ title, children }, i) => (
        <AccordionGroup
          key={title}
          title={title}
          isOpen={isOpenIndex === i}
          onClick={() => setIsOpenIndex(i)}
        >
          <Grid>{children}</Grid>
        </AccordionGroup>
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
