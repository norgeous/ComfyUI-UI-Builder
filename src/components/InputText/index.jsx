import { useContext } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import Layout from '@/components/Layout';
import InputHeader from '@/components/InputHeader';
import { Input } from './styled';

const InputText = ({
  id = undefined,
  label = undefined,
  info = undefined,
  options = [],
  value = undefined,
  onChange = () => {},
  children = null,
}) => {
  const ref = useContext(InputRefContext);

  return (
    <Layout column gap="sm">
      <InputHeader id={id} label={label} info={info}>
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
  );
};

InputText.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  /** auto completions array of strings */
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default InputText;
