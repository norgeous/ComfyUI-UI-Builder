import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCircleQuestion } from 'react-icons/fa6';

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
`;

const Label = styled.label`
  font-size: 0.875rem; // 14px
`;

const InputHeader = ({ id, label, info, showReset, handleReset }) => (
  <Wrapper>
    <WrapperLeft>
      <Label htmlFor={id}>{label}</Label>
      {info && (
        <Button title={info} onClick={() => alert(info)}>
          <FaCircleQuestion size={14} />
        </Button>
      )}
    </WrapperLeft>
    {showReset && <Button onClick={handleReset}>reset</Button>}
  </Wrapper>
);

InputHeader.defaultProps = {
  id: undefined,
  label: undefined,
  info: undefined,
  showReset: false,
  handleReset: () => {},
};

InputHeader.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  showReset: PropTypes.bool,
  handleReset: PropTypes.func,
};

export default InputHeader;
