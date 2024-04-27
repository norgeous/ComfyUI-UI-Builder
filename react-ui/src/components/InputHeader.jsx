import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { FaCircleQuestion, FaSpinner } from 'react-icons/fa6';

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
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
`;

const spin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;

const Loading = styled.div`
  animation: ${spin} 800ms infinite linear;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputHeader = ({
  id,
  label,
  info,
  isLoading,
  showReset,
  handleReset,
}) => (
  <Wrapper>
    <WrapperLeft>
      {label && <Label htmlFor={id}>{label}</Label>}
      {info && (
        <Button title={info} onClick={() => alert(info)}>
          <FaCircleQuestion size={14} />
        </Button>
      )}
      {isLoading && (
        <Loading>
          <FaSpinner size={14} />
        </Loading>
      )}
    </WrapperLeft>
    {showReset && <Button onClick={handleReset}>reset</Button>}
  </Wrapper>
);

InputHeader.defaultProps = {
  id: undefined,
  label: undefined,
  info: undefined,
  isLoading: false,
  showReset: false,
  handleReset: () => {},
};

InputHeader.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  isLoading: PropTypes.bool,
  showReset: PropTypes.bool,
  handleReset: PropTypes.func,
};

export default InputHeader;
