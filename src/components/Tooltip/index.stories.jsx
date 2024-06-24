import { userEvent } from '@storybook/test';
import styled from 'styled-components';
import component from '.';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const HoverMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f55;
  width: 60px;
  text-align: center;
  padding: 5px;
  font-size: 12px;
`;

export default {
  title: 'Tooltip',
  component,
  decorators: [
    Story => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export const Top = {
  args: {
    text: 'My Tooltip',
    placement: 'top',
    children: <HoverMe>Hover Me</HoverMe>,
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};

export const Right = {
  args: {
    text: 'My Tooltip',
    placement: 'right',
    children: <HoverMe>Hover Me</HoverMe>,
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};

export const Bottom = {
  args: {
    text: 'My Tooltip',
    placement: 'bottom',
    children: <HoverMe>Hover Me</HoverMe>,
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};

export const Left = {
  args: {
    text: 'My Tooltip',
    placement: 'left',
    children: <HoverMe>Hover Me</HoverMe>,
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(canvasElement.querySelector('span'));
  },
};
