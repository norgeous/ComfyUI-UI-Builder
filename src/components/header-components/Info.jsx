import PropTypes from 'prop-types';
import Tooltip from '@/components/Tooltip';
import { QuestionMark } from '../Icons/Icons';

const Info = ({ text = undefined }) => (
  <Tooltip text={text}>
    <QuestionMark className="muted" />
  </Tooltip>
);

Info.propTypes = {
  text: PropTypes.string,
};

export default Info;
