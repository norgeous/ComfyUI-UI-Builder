import styled from 'styled-components';
import PropTypes from 'prop-types';

import './Accordion.css';

const AccordionContainer = styled.section`
  overflow-y: auto;
  flex-grow: 1;
`;

const Accordion = ({ sections }) => (
  <AccordionContainer uk-accordion="collapsible: false">
    {sections?.map(({ title, children }) => (
      <div key={title}>
        <a className="uk-accordion-title">{title}</a>
        <div className="uk-accordion-content uk-grid-small" uk-grid="true">
          {children}
        </div>
      </div>
    ))}
  </AccordionContainer>
);

Accordion.defaultProps = {
  sections: [],
};

Accordion.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    children: PropTypes.node,
  })),
};

export default Accordion;
