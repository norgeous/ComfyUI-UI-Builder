import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import InputWrapper from '../InputWrapper';
import InputHeader from '../InputHeader';
import ErrorText from '../ErrorText';
import deepEqual from '../../../utils/deepEqual';

const Input = styled.input.attrs({ type: 'range' })`
  accent-color: var(--input-outline);
  margin: 0;
  display: block;
  width: 100%;
`;

const Sublabels = styled.div`
  padding: ${({ $isPips }) => ($isPips ? '0 10px' : 0)};
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  opacity: 0.5;
`;

const Sublabel = styled.div`
  cursor: pointer;
  display: inline-flex;
  place-items: center;
  gap: 4px;
`;

const Pip = styled.div`
  width: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const InputRange = ({
  id = undefined,
  label = undefined,
  info = undefined,
  options = [],
  defaultValueIndex = undefined,
  value = undefined,
  onChange = () => {},
  isLoading = false,
  error = undefined,
  ...props
}) => {
  const index = options.findIndex(
    option => option.value === value || deepEqual(option.value, value),
  );
  const isPips = options.every(({ label: pipLabel }) => pipLabel);
  const minLabel = options[0].label;
  const maxLabel = options[options.length - 1].label;

  const handleReset = () => onChange(options[defaultValueIndex].value);

  const showReset = index !== defaultValueIndex;

  return (
    <InputWrapper>
      <InputHeader
        id={id}
        label={label}
        info={info}
        isLoading={isLoading}
        showReset={showReset}
        handleReset={handleReset}
      />
      <Input
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        min="0"
        step="1"
        max={options.length - 1}
        value={index}
        onChange={event => onChange(options[event.target.value].value)}
      />
      <Sublabels $isPips={isPips}>
        {!isPips && minLabel && (
          <Sublabel onClick={() => onChange(options[0].value)}>
            <FaArrowLeft />
            {minLabel}
          </Sublabel>
        )}
        {isPips &&
          options?.map(({ label: pipLabel, value: pipValue }) => (
            <Pip key={pipLabel} onClick={() => onChange(pipValue)}>
              {pipLabel}
            </Pip>
          ))}
        {!isPips && maxLabel && (
          <Sublabel onClick={() => onChange(options[options.length - 1].value)}>
            {maxLabel}
            <FaArrowRight />
          </Sublabel>
        )}
      </Sublabels>
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

InputRange.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    }),
  ),
  defaultValueIndex: PropTypes.number,
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default InputRange;
