import { useContext, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@/components/Icons';
import HeaderButton from '@/components/HeaderButton';
import InputRefContext from '@/contexts/InputRefContext';
import InputContext from '@/contexts/InputContext';

// prevent ctrl+up moving to start of input
// prevent ctrl+down moving to end of input
const preventer = event => {
  if (event.ctrlKey && ['ArrowUp', 'ArrowDown'].includes(event.key)) {
    event.preventDefault();
  }
};

const WeightControls = () => {
  const ref = useContext(InputRefContext);
  const { value, onChange, setExtraInputProps } = useContext(InputContext);

  // handle ctrl+up and ctrl+down to control word or phrase weight inside prompt input
  // work needed for edge cases (TODO):
  // - when the cursor (or selection) is only near (or only contains) whitespace characters and a selection cant be inferred, then do nothing
  // - when cursor is not a selection but is inside a word, then expand the selection (start/end) to encompass the word (comfy doesnt do this, but would be good imo)
  // - when cursor is not a selection but is inside a phrase with a previously defined weight, then expand the selection (start/end) to previous weight
  // - when the selection contains trimmable whitespace (left or right), then adjust the selection (start/end) to exclude timmable whitespace (comfy only moves trailing whitespace)
  // - when the selection contains a partial word (or phase), then expand the selection (start/end) to encompass the partially selected text
  // - when the selection contains 1 or more previously defined weights, then replace them both with the new weight and selection range (comfy doesnt handle this case) - also should expand selection to whole words

  // handling these cases might be a good candidate for unit tests
  // const testCases = [
  //   // [given, direction, expected]
  //   ['abc | def ghi jkl mno', 'up', 'abc | def ghi jkl mno'],
  //   ['abc |def ghi jkl mno', 'up', 'abc |(def:1.1)| ghi jkl mno'],
  //   ['|abc (def:1.1) ghi |jkl mno', 'up', '|(abc def ghi:1.2)| jkl mno'],
  // ];

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

      // console.log({ value, newValue });

      onChange(newValue);

      setTimeout(() => {
        ref.current.selectionStart = selectionStart;
        ref.current.selectionEnd = selectionStart + newSelection.length;
      }, 0);
    }
  };

  useEffect(() => {
    setExtraInputProps({ onKeyDown: preventer, onKeyUp: specialControls });
  }, [setExtraInputProps, specialControls]);

  return (
    <>
      <HeaderButton label="Prompt weight up (CTRL + UP)" onClick={() => {}}>
        <ArrowUpIcon />
      </HeaderButton>
      <HeaderButton label="Prompt weight down (CTRL + DOWN)" onClick={() => {}}>
        <ArrowDownIcon />
      </HeaderButton>
    </>
  );
};
export default WeightControls;
