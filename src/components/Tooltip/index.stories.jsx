import { userEvent } from '@storybook/test';
import styled from 'styled-components';
import component from '.';

const HoverMe = styled.div`
  border: 1px solid red;
  margin: 0 auto;
  width: 100px;
  text-align: center;
  padding: 5px;
`;

export default {
  title: 'Tooltip',
  component,
};

export const Tooltip = {
  args: {
    text: 'This is the tooltip text!',
    children: <HoverMe>Hover Me</HoverMe>,
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};
