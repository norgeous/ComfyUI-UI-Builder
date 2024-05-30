import PropTypes from 'prop-types';
import styled from 'styled-components';

const TooltipText = styled.span`
  display: none;
  font-size: 0.75rem; // 12px
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  border: 1px solid grey;
  position: absolute;
  z-index: 1;
  width: max-content;
  max-width: 160px;
  top: 100%;
  left: 50%;
  margin-top: 5px;
  transform: translate(-50%);
  white-space: preserve-breaks;
  &::after {
    content: ' ';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent grey transparent;
  }
`;

const TooltipWrapper = styled.div`
  position: relative;
  &:hover ${TooltipText} {
    display: inline-block;
  }
`;

const Tooltip = ({ text = undefined, children = null }) => (
  <TooltipWrapper>
    {children}
    <TooltipText>{text}</TooltipText>
  </TooltipWrapper>
);

Tooltip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

export default Tooltip;
