import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import deepEqual from '@/utils/deepEqual';
import InputWrapper from '../InputWrapper';
import InputHeader from '../InputHeader/InputHeader';
import ErrorText from '../ErrorText';

const Textarea = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--input-fg);
  border-radius: var(--radius);
  &:focus {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
  }
  min-height: 80px;
  line-height: 21px;
  padding: 4px 8px;
  resize: vertical;
`;

const InputTextarea = ({
  id = undefined,
  label = undefined,
  info = undefined,
  defaultValue = undefined,
  value = undefined,
  onChange = () => {},
  error = undefined,
  ...props
}) => {
  const ref = useRef();

  const handleReset = () => onChange(defaultValue);

  const showReset = value !== defaultValue && !deepEqual(value, defaultValue);

  // handle ctrl+up and ctrl+down to control word weight inside prompt input
  // work needed for edge cases (TODO):
  // - when the cursor is only near whitespace characters and a selection cant be inferred, do nothing
  // - when cursor is not a selection but is inside a word, expand the selection start/end to encompass the word
  // - when cursor is not a selection but is inside a phrase with a previously defined weight, expand the selection (start/end) to previous weight
  // - when the selection contains trimmable whitespace (left or right), adjust the selection (start/end) to exclude timmable whitespace (comfy only moves trailing whitespace)
  // - when the selection contains a partial word (or phase), expand the selection to encompass the partially selected text
  // - when the selection contains 2 previously defined weights, replace them both with the new weight and selection range (comfy doesnt handle this case)
  const specialControls = event => {
    if (event.ctrlKey && ['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      const { selectionStart, selectionEnd } = ref.current;

      const before = value.slice(0, selectionStart);
      const selection = value.slice(selectionStart, selectionEnd);
      const after = value.slice(selectionEnd);

      const delimiterIndex = selection.lastIndexOf(':');
      const text = selection
        .slice(0, delimiterIndex > 0 ? delimiterIndex : undefined)
        .replace('(', '');

      const weight =
        Number(
          selection
            .slice(delimiterIndex + 1)
            .trim()
            .replace(')', ''),
        ) || 1;

      const newWeight = {
        ArrowUp: (weight + 0.1).toFixed(1),
        ArrowDown: (weight - 0.1).toFixed(1),
      }[event.key];
      const newSelection =
        newWeight !== '1.0' ? `(${text}:${newWeight})` : text;
      const newValue = `${before + newSelection + after}`;

      onChange(newValue);

      setTimeout(() => {
        ref.current.selectionStart = selectionStart;
        ref.current.selectionEnd = selectionStart + newSelection.length;
      }, 0);
    }
  };

  // prevent ctrl+up moving to start of input
  // prevent ctrl+down moving to end of input
  const preventer = event => {
    if (event.ctrlKey && ['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <InputWrapper>
      <InputHeader
        id={id}
        label={label}
        info={info}
        showReset={showReset}
        handleReset={handleReset}
      />
      <Textarea
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        ref={ref}
        id={id}
        value={value}
        onChange={event => onChange(event.target.value)}
        onKeyDown={preventer}
        onKeyUp={specialControls}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

InputTextarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  defaultValue: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default InputTextarea;
