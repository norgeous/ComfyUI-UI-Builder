import { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import Layout from '@/components/Layout';
import InputHeader from '@/components/InputHeader';
import InputContext from '@/contexts/InputContext';
import { Input, Textarea } from './styles';
import Controls from './Controls';

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

  const context = useMemo(
    () => ({ id, value, onChange }),
    [id, onChange, value],
  );

  if (options.length) {
    return (
      <InputContext.Provider value={context}>
        <Layout pad column gap="sm">
          <InputHeader id={id} label={label} info={info}>
            <Controls controlOptions={controlOptions} />
            {children}
          </InputHeader>
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
        <InputHeader id={id} label={label} info={info}>
          <Controls controlOptions={controlOptions} />
          {children}
        </InputHeader>
        <Textarea
          ref={ref}
          id={id}
          value={value}
          onChange={event => onChange(event.target.value)}
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
  controlOptions: PropTypes.arrayOf(PropTypes.oneOf(['weight'])),
};

export default InputText;
