import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCircleQuestion } from 'react-icons/fa6';
import Spinner from '@/components/Spinner';

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
`;

const WrapperLeft = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  color: inherit;
  background: transparent;
  opacity: 0.5;
  cursor: pointer;
  font-size: 0.75rem; // 12px
  display: inline;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 0.875rem; // 14px
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const InputHeader = ({
  id = undefined,
  label = undefined,
  info = undefined,
  isLoading = false,
  showReset = false,
  handleReset = () => {},
}) => (
  <Wrapper>
    <WrapperLeft>
      {label && <Label htmlFor={id}>{label}</Label>}
      {info && (
        // eslint-disable-next-line no-alert
        <Button title={info} onClick={() => alert(info)}>
          <FaCircleQuestion size={14} />
        </Button>
      )}
      {isLoading && <Spinner />}
    </WrapperLeft>
    {showReset && <Button onClick={handleReset}>reset</Button>}
  </Wrapper>
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
