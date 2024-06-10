import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderButton from '@/components/HeaderButton';
import { ResetIcon } from '@/components/Icons';

const HeaderButtonPush = styled(HeaderButton)`
  margin-left: auto;
`;

const ResetButton = ({ onClick = () => {} }) => (
  <HeaderButtonPush label="Reset" onClick={onClick}>
    <ResetIcon />
  </HeaderButtonPush>
);
ResetButton.propTypes = {
  onClick: PropTypes.func,
};

export default ResetButton;
