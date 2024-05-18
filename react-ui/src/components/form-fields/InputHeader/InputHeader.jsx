import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCircleQuestion } from 'react-icons/fa6';
import Spinner from '@/components/Spinner';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

const Left = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Label = styled.label`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.875rem; // 14px
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: inherit;
  background: transparent;
  opacity: 0.5;
  font-size: 0.75rem; // 12px
`;

const InputHeader = ({
  id = undefined,
  label = undefined,
  info = undefined,
  isLoading = false,
  showReset = false,
  handleReset = () => {},
}) => (
  <Wrap>
    <Left>
      <Label>Label Label Label Label Label Label Label Label Label Label</Label>
      <Button>
        <FaCircleQuestion size={14} />
      </Button>
      {isLoading && <Spinner />}
    </Left>
    <Button onClick={handleReset}>Reset</Button>
  </Wrap>
);

InputHeader.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  isLoading: PropTypes.bool,
  showReset: PropTypes.bool,
  handleReset: PropTypes.func,
};

export default InputHeader;
