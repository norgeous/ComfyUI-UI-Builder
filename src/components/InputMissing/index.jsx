import PropTypes from 'prop-types';

const Missing = ({ type = undefined }) => (
  <div>
    Component type <strong>{type}</strong> not found
  </div>
);

Missing.propTypes = {
  type: PropTypes.string,
};

export default Missing;
