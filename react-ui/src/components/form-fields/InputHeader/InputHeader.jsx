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
  id = undefined,
  label = undefined,
  subComponents = [],

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
      />
    ))}

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
  label: PropTypes.string,
  subComponents: PropTypes.array,

  isLoading: PropTypes.bool,
  showMic: PropTypes.bool,
  isMuted: PropTypes.bool,
  onClickMic: PropTypes.func,
};

export default InputHeader;
