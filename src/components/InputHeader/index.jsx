import PropTypes from 'prop-types';
import Info from '@/components/HeaderInfo';
import { Wrap, Label } from './styled';

const InputHeader = ({
  id = undefined,
  label = undefined,
  info = undefined,
  children = null,
}) => (
  <Wrap>
    {label && <Label htmlFor={id}>{label}</Label>}
    {info && <Info text={info} />}
    {children}
  </Wrap>
);

InputHeader.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  children: PropTypes.node,
};

export default InputHeader;
