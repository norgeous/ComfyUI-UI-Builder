import PropTypes from 'prop-types';
import styled from 'styled-components';

import Spinner from '@/components/Spinner';
import HeaderItem from '../../header-components/HeaderItem';
import Microphone from '../../header-components/Microphone';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Label = styled.label`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.875rem; // 12px
`;

const InputHeader = ({
  inputRef = undefined,
  id = undefined,
  label = undefined,
  subComponents = [],

  children = null,
  isLoading = false,
  showMic = false,
  isMuted = true,
  onClickMic = () => {},
}) => (
  <Wrap>
    {label && <Label htmlFor={id}>{label}</Label>}
    {subComponents.map(props => (
      <HeaderItem
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        key={props.id}
        inputRef={inputRef}
      />
    ))}
    {children}

    {showMic && (
      <Microphone
        isLoading={isLoading}
        isMuted={isMuted}
        onClick={onClickMic}
      />
    )}
    {isLoading && <Spinner />}
  </Wrap>
);

InputHeader.propTypes = {
  id: PropTypes.string,
  inputRef: PropTypes.object,
  label: PropTypes.string,
  subComponents: PropTypes.array,
  children: PropTypes.node,

  isLoading: PropTypes.bool,
  showMic: PropTypes.bool,
  isMuted: PropTypes.bool,
  onClickMic: PropTypes.func,
};

export default InputHeader;
