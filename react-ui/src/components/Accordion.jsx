/* eslint-disable react/no-unknown-property */

const Accordion = ({ sections }) => (
  <div uk-accordion="collapsible: false">
    <div>
      <a className="uk-accordion-title" href>Generation parms</a>
      <div className="uk-accordion-content uk-grid-small" uk-grid>
        content 1
      </div>
    </div>
    <div>
      <a className="uk-accordion-title" href>Setting</a>
      <div className="uk-accordion-content uk-grid-small" uk-grid>
        content 2
      </div>
    </div>
    <div>
      <a className="uk-accordion-title" href>Character</a>
      <div className="uk-accordion-content uk-grid-small" uk-grid>
        content 3
      </div>
    </div>
    <div>
      <a className="uk-accordion-title" href>Custom</a>
      <div className="uk-accordion-content uk-grid-small" uk-grid>
        content 4
      </div>
    </div>
  </div>
);

export default Accordion;
