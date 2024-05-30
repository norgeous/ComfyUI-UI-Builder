import styled from 'styled-components';
import PropTypes from 'prop-types';
import AccordionSingle from './AccordionSingle';

const AccordionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Accordion = ({ sections = [] }) => (
  <AccordionContainer>
    {sections?.map(({ title, children }) => (
      <AccordionSingle key={title} title={title}>
        {children}
      </AccordionSingle>
    ))}
  </AccordionContainer>
);

Accordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      children: PropTypes.node,
    }),
  ),
};

export default Accordion;
