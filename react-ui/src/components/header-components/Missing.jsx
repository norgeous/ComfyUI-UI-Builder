import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaClipboardQuestion } from 'react-icons/fa6';
import Tooltip from '@/components/Tooltip';

const QuestionMark = styled(FaClipboardQuestion)`
  display: block;
  font-size: 12px;
  color: grey;
`;

const Missing = ({ type = undefined }) => (
  <Tooltip text={`Header component type "${type}" is not found`}>
    <QuestionMark />
  </Tooltip>
);

Missing.propTypes = {
  type: PropTypes.string,
};

export default Missing;
