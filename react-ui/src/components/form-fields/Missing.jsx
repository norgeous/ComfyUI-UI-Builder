import PropTypes from 'prop-types';

const Missing = ({ type }) => (
  <>
    component type <strong>{type}</strong> not found
  </>
);

Missing.defaultProps = {
  type: undefined,
};

Missing.propTypes = {
  type: PropTypes.string,
};

export default Missing;
