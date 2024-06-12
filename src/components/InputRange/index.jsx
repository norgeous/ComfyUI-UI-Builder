import { useContext } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import deepEqual from '@/utils/deepEqual';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/Icons';
import InputWrapper from '@/components/InputWrapper';
import InputHeader from '@/components/InputHeader';
import {
  RangeWrapper,
  Input,
  Sublabels,
  Sublabel,
  SublabelText,
  Pip,
} from './styled';

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
