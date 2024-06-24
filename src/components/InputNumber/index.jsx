import { useContext } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import Layout from '@/components/Layout';
import InputHeader from '@/components/InputHeader';
import { Input } from './styled';

const InputNumber = ({
  id = undefined,
  label = undefined,
  info = undefined,
  value = undefined,
  onChange = () => {},
  children = null,
}) => {
  const ref = useContext(InputRefContext);

  return (
    <Layout pad column gap="sm">
      <InputHeader id={id} label={label} info={info}>
        {children}
      </InputHeader>
      <Input
        ref={ref}
        id={id}
        value={value}
        onChange={event => onChange(Number(event.target.value))}
      />
    </Layout>
  );
};

InputNumber.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default InputNumber;
