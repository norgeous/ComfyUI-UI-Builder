import styled from 'styled-components';
import PropTypes from 'prop-types';

import './Accordion.css';

const AccordionContainer = styled.section`
  overflow-y: auto;
  flex-grow: 1;
`;

const Accordion = ({ items }) => {
  const sections = items.reduce((acc, { group, component }) => {
    const previousChildrenInGroup = acc
      .find(({ title }) => title === group)?.children || [];

    return [
      ...acc.filter(({ title }) => title !== group),
      {
        title: group,
        children: [
          ...previousChildrenInGroup,
          component,
        ],
      },
    ];
  }, []);

  return (
    <AccordionContainer uk-accordion="collapsible: false">
      {sections?.map(({ title, children }) => (
        <div key={title}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="uk-accordion-title">{title}</a>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <div className="uk-accordion-content uk-grid-small" uk-grid="true">
            {children}
          </div>
        </div>
      ))}
    </AccordionContainer>
  );
};

Accordion.defaultProps = {
  items: [],
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    group: PropTypes.string,
    component: PropTypes.node,
  })),
};

export default Accordion;
