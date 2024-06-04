import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import Tooltip from '@/components/Tooltip';
import InputHeaderButton from '../form-fields/InputHeaderButton/InputHeaderButton';

const ResetTooltip = styled(Tooltip)`
  margin-left: auto;
`;

const ResetIcon = styled(FaArrowRotateLeft)`
  display: block;
  font-size: 12px;
`;

const Reset = ({ onClick = () => {} }) => (
  <ResetTooltip text="Reset">
    <InputHeaderButton aria-label="Reset" onClick={onClick}>
      <ResetIcon />
    </InputHeaderButton>
  </ResetTooltip>
);

Reset.propTypes = {
  onClick: PropTypes.func,
};

export default Reset;
