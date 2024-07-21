import { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import Layout from '@/components/Layout';
import InputHeader from '@/components/InputHeader';
import InputContext from '@/contexts/InputContext';
import { Input, Textarea } from './styles';
import WeightControls from './controls/WeightControls';
import SpeechControls from './controls/SpeechControls';
import LimitControls from './controls/LimitControls';

const InputText = ({
  id = undefined,
  label = undefined,
  info = undefined,
  options = [],
  value = undefined,
  onChange = () => {},
  children = null,
  controlOptions = [],
}) => {
  const ref = useContext(InputRefContext);

  const [extraInputProps, setExtraInputProps] = useState({});
  const context = useMemo(
    () => ({ id, value, onChange, extraInputProps, setExtraInputProps }),
    [id, onChange, value, extraInputProps, setExtraInputProps],
  );

  const header = (
    <InputHeader id={id} label={label} info={info}>
      {controlOptions.includes('weight') && <WeightControls />}
      {controlOptions.includes('speech') && <SpeechControls />}
      {controlOptions.includes('limit') && <LimitControls />}
      {children}
    </InputHeader>
  );

  if (options.length) {
    return (
      <InputContext.Provider value={context}>
        <Layout pad column gap="sm">
          {header}
          <Input
            ref={ref}
            id={id}
            value={value}
            onChange={event => onChange(event.target.value)}
            list={options.length ? `${id}-list` : undefined}
          />
          {!!options.length && (
            <datalist id={`${id}-list`}>
              {options.map(option => (
                <option key={option} aria-label={option} value={option} />
              ))}
            </datalist>
          )}
        </Layout>
      </InputContext.Provider>
    );
  }
  return (
    <InputContext.Provider value={context}>
      <Layout pad column gap="sm">
        {header}
        <Textarea
          ref={ref}
          id={id}
          value={value}
          onChange={event => onChange(event.target.value)}
          {...extraInputProps} // eslint-disable-line react/jsx-props-no-spreading
        />
      </Layout>
    </InputContext.Provider>
  );
};

InputText.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.node,
  controlOptions: PropTypes.arrayOf(
    PropTypes.oneOf(['weight', 'speech', 'limit']),
  ),
};

export default InputText;
