import PropTypes from 'prop-types';
import styled from 'styled-components';

import Spinner from '@/components/Spinner';

import Microphone from './header-components/Microphone';
import Info from './header-components/Info';
import Reset from './header-components/Reset';

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
  children = null,

  info = undefined,
  isLoading = false,
  showMic = false,
  isMuted = true,
  onClickMic = () => {},
  showReset = false,
  handleReset = () => {},
}) => (
  <Wrap>
    {label && <Label htmlFor={id}>{label}</Label>}
    {info && <Info text={info} />}
    {showMic && (
      <Microphone
        isLoading={isLoading}
        isMuted={isMuted}
        onClick={onClickMic}
      />
    )}
    {children}
    {isLoading && <Spinner />}
    {showReset && <Reset onClick={handleReset} />}
  </Wrap>
);

InputHeader.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,

  info: PropTypes.string,
  isLoading: PropTypes.bool,
  showMic: PropTypes.bool,
  isMuted: PropTypes.bool,
  onClickMic: PropTypes.func,
  showReset: PropTypes.bool,
  handleReset: PropTypes.func,
};

export default InputHeader;
