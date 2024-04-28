import PropTypes from 'prop-types';

const Missing = ({ type = undefined }) => (
  <>
    component type <strong>{type}</strong> not found
  </>
);

Missing.propTypes = {
  type: PropTypes.string,
};

export default Missing;
