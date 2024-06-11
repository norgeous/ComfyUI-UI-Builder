import PropTypes from 'prop-types';
import HeaderButton from '@/components/HeaderButton';
import { ResetIcon } from '@/components/Icons';

const ResetButton = ({ onClick = () => {} }) => (
  <HeaderButton label="Reset" lm onClick={onClick}>
    <ResetIcon />
  </HeaderButton>
);
ResetButton.propTypes = {
  onClick: PropTypes.func,
};

export default ResetButton;
