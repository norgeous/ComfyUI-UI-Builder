import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCircleQuestion } from 'react-icons/fa6';
import Tooltip from '@/components/Tooltip';

const QuestionMark = styled(FaCircleQuestion)`
  display: block;
  font-size: 12px;
  color: grey;
`;

const Info = ({ value = undefined }) => (
  <Tooltip text={value}>
    <QuestionMark />
  </Tooltip>
);

Info.propTypes = {
  value: PropTypes.string,
};

export default Info;
