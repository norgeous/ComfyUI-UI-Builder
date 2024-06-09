import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import InputRefContext from '@/contexts/InputRefContext';
import deepEqual from '@/utils/deepEqual';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/Icons/Icons';
import InputWrapper from '../InputWrapper/InputWrapper';
import InputHeader from '../../InputHeader/InputHeader';

const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.33333333px; /* to make it the same height as a text input */
`;

const track = css`
  width: 100%;
  height: 8px;
  cursor: pointer;
  background: var(--input-bg);
  border: 1px solid var(--input-outline);
  border-radius: 100px;
`;

const thumb = css`
  border: none;
  border: 2px solid #fff;
  box-sizing: border-box;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: var(--input-outline);
  cursor: pointer;
`;

const progress = css`
  background: var(--input-outline);
  height: 8px;
`;

const Input = styled.input.attrs({ type: 'range' })`
  display: block;
  width: 100%;
  height: 20px;
  min-width: 100%;
  box-sizing: border-box;
  accent-color: var(--input-outline);
  margin: 0;
  background: transparent;
  &::-moz-range-track {
    ${track}
  }
  &::-moz-range-progress {
    ${progress}
  }
  &::-moz-range-thumb {
    ${thumb}
  }

  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    ${track}
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -6px;
    ${thumb}
  }
`;

const Sublabels = styled.div`
  padding: ${({ $isPips }) => ($isPips ? '0 10px' : 0)};
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

const Sublabel = styled.div`
  cursor: pointer;
  display: inline-flex;
  place-items: center;
  gap: 4px;
  overflow: hidden;
`;

const SublabelText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Pip = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  width: 0;
`;

const InputRange = ({
  id = undefined,
  label = undefined,
  info = undefined,
  options = [],
  value = undefined,
  onChange = () => {},
  children = null,
}) => {
  const ref = useContext(InputRefContext);

  const index = options.findIndex(
    option => option.value === value || deepEqual(option.value, value),
  );
  const isPips = options.every(({ label: pipLabel }) => pipLabel);
  const minLabel = options[0].label;
  const maxLabel = options[options.length - 1].label;

  const handleChange = newValue => {
    ref.current.focus();
    onChange(newValue);
  };

  return (
    <InputWrapper>
      <InputHeader id={id} label={label} info={info}>
        {children}
      </InputHeader>
      <RangeWrapper>
        <Input
          ref={ref}
          id={id}
          min="0"
          step="1"
          max={options.length - 1}
          value={index}
          onChange={event => onChange(options[event.target.value].value)}
        />
        <Sublabels $isPips={isPips} className="muted">
          {!isPips && minLabel && (
            <Sublabel onClick={() => handleChange(options[0].value)}>
              <ArrowLeftIcon />
              <SublabelText>{minLabel}</SublabelText>
            </Sublabel>
          )}
          {isPips &&
            options?.map(({ label: pipLabel, value: pipValue }) => (
              <Pip key={pipLabel} onClick={() => handleChange(pipValue)}>
                {pipLabel}
              </Pip>
            ))}
          {!isPips && maxLabel && (
            <Sublabel
              onClick={() => handleChange(options[options.length - 1].value)}
            >
              <SublabelText>{maxLabel}</SublabelText>
              <ArrowRightIcon />
            </Sublabel>
          )}
        </Sublabels>
      </RangeWrapper>
    </InputWrapper>
  );
};

InputRange.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    }),
  ),
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default InputRange;
