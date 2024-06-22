import PropTypes from 'prop-types';
import { Pre } from './styled';

const Debug = ({ onClick = () => {}, data = undefined }) => (
  <Pre onClick={onClick}>{JSON.stringify(data, null, 2)}</Pre>
);

Debug.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default Debug;
