import Info from '@/components/header-components/HeaderInfo';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

const Label = styled.label`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.875rem; // 12px
`;

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
