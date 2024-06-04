import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCircleQuestion } from 'react-icons/fa6';
import Tooltip from '@/components/Tooltip';

const QuestionMark = styled(FaCircleQuestion)`
  display: block;
  font-size: 12px;
`;

const Info = ({ label = undefined }) => (
  <Tooltip text={label}>
    <QuestionMark className="muted" />
  </Tooltip>
);

Info.propTypes = {
  label: PropTypes.string,
};

export default Info;