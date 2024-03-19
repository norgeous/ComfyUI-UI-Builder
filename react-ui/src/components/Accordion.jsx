/* eslint-disable react/no-unknown-property */

import PropTypes from 'prop-types';

const Accordion = ({ sections }) => (
  <div uk-accordion="collapsible: false">
    {sections.map(({ title, children }) => (
      <div key={title}>
        <a className="uk-accordion-title" href>{title}</a>
        <div className="uk-accordion-content uk-grid-small" uk-grid>
          {children}
        </div>
      </div>
    ))}
  </div>
);
Accordion.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    children: PropTypes.node,
  })),
};

export default Accordion;
