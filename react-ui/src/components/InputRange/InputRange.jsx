import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import InputHeader from '../InputHeader';
import ErrorText from '../ErrorText';

const Input = styled.input.attrs({ type: 'range' })`
  accent-color: var(--input-outline);
  margin: 0;
  display: block;
  width: 100%;
`;

const Sublabels = styled.div`
  padding: ${({ $isPips }) => ($isPips ? '0 8px' : 0)};
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 4px;
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
  id,
  label,
  info,
  isLoading,
  options,
  defaultValue,
  value,
  onChange,
  error,
  ...props
}) => {
  const isPips = options.every(({ label: pipLabel }) => pipLabel);
  const minLabel = options[0].label;
  const maxLabel = options[options.length - 1].label;

  const handleChange = newValue => {
    // const { value } = options[Number(event.target.value)];
    onChange(newValue);
  };

  const showReset = true;
  const handleReset = () => onChange(defaultValue);

  const index = options.findIndex(option => option.value === value);

  return (
    <>
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
        onChange={event => handleChange(options[event.target.value].value)}
      />
      <Sublabels $isPips={isPips}>
        {!isPips && minLabel && (
          <Sublabel onClick={() => onChange(options[0])}>
            <FaArrowLeft />
            {minLabel}
          </Sublabel>
        )}
        {isPips &&
          options?.map(({ label: pipLabel }, index) => (
            <Pip key={pipLabel} onClick={() => onChange(options[index])}>
              {pipLabel}
            </Pip>
          ))}
        {!isPips && maxLabel && (
          <Sublabel onClick={() => onChange(options[options.length - 1])}>
            {maxLabel}
            <FaArrowRight />
          </Sublabel>
        )}
      </Sublabels>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

InputRange.defaultProps = {
  name: undefined,
  label: undefined,
  info: undefined,
  options: [],
  value: undefined,
  onChange: () => {},
};

InputRange.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    }),
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default InputRange;
