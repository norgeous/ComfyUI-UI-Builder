import { useContext, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@/components/Icons';
import HeaderButton from '@/components/HeaderButton';
import InputRefContext from '@/contexts/InputRefContext';
import InputContext from '@/contexts/InputContext';

const findWordIndex = (charIndex, words) => {
  const { index: wordIndex } = words.reduce(
    ({ total, index }, word, i) => {
      const newTotal = total + word.length + 1;
      const newIndex = newTotal > charIndex && index === -1 ? i : index;
      return { total: newTotal, index: newIndex };
    },
    { total: 0, index: -1 },
  );
  return wordIndex;
};

const updateWeight = ({ ref, value, direction, onChange }) => {
  const { selectionStart, selectionEnd } = ref.current;

  const words = value.split(' ');

  const startWordIndex = findWordIndex(selectionStart, words);
  const endWordIndex = findWordIndex(selectionEnd, words);

  const beforeWords = words.slice(0, startWordIndex);
  const selectionWords = words.slice(startWordIndex, endWordIndex + 1);
  const afterWords = words.slice(endWordIndex + 1);

  const selection = selectionWords.join(' ');
  const delimiterIndex = selection.lastIndexOf(':');
  const textWithoutWeight = selection
    .slice(0, delimiterIndex > 0 ? delimiterIndex : undefined)
    .replace('(', '');

  const oldWeightOrNaN = Number(
    selection
      .slice(delimiterIndex + 1)
      .trim()
      .replace(')', ''),
  );

  const oldWeight = !Number.isNaN(oldWeightOrNaN) ? oldWeightOrNaN : 1;

  const newWeight = {
    up: (oldWeight + 0.1).toFixed(1),
    dn: (oldWeight - 0.1).toFixed(1),
  }[direction];

  const newSelection =
    newWeight !== '1.0'
      ? `(${textWithoutWeight}:${newWeight})`
      : textWithoutWeight;

  const before = beforeWords.join(' ');
  const after = afterWords.join(' ');

  const newValue = [before, newSelection, after].join(' ');

  onChange(newValue);

  setTimeout(() => {
    ref.current.focus();
    ref.current.selectionStart = before.length + 1; // eslint-disable-line no-param-reassign
    ref.current.selectionEnd = before.length + 1 + newSelection.length; // eslint-disable-line no-param-reassign
  }, 0);
};

// prevent ctrl+up onKeyDown moving to start of input
// prevent ctrl+down onKeyDown moving to end of input
const preventer = event => {
  if (event.ctrlKey && ['ArrowUp', 'ArrowDown'].includes(event.key)) {
    event.preventDefault();
  }
};

const WeightControls = () => {
  const ref = useContext(InputRefContext);
  const { value, onChange, setExtraInputProps } = useContext(InputContext);

  useEffect(() => {
    const specialControls = event => {
      if (event.ctrlKey && ['ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        const direction = { ArrowUp: 'up', ArrowDown: 'dn' }[event.key];
        updateWeight({ ref, value, onChange, direction });
      }
    };
    setExtraInputProps({ onKeyDown: preventer, onKeyUp: specialControls });
  }, [onChange, ref, setExtraInputProps, value]);

  return (
    <>
      <HeaderButton
        label="Prompt weight up (CTRL + UP)"
        onClick={() => updateWeight({ ref, value, onChange, direction: 'up' })}
      >
        <ArrowUpIcon />
      </HeaderButton>
      <HeaderButton
        label="Prompt weight down (CTRL + DOWN)"
        onClick={() => updateWeight({ ref, value, onChange, direction: 'dn' })}
      >
        <ArrowDownIcon />
      </HeaderButton>
    </>
  );
};
export default WeightControls;
