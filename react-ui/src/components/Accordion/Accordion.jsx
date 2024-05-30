import styled from 'styled-components';
import PropTypes from 'prop-types';
import AccordionGroup from './AccordionGroup';

const AccordionContainer = styled.section`
  overflow-y: auto;
  flex-grow: 1;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 8px;
`;

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
        <AccordionGroup key={title} title={title}>
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
