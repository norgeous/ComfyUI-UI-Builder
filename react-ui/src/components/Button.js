import { Button as MantineButton } from '@mantine/core';

const Button = ({ children, ...props }) => (
  <MantineButton
    {...props}
    loaderProps={{ type: 'dots' }}
  >
    {children}
  </MantineButton>
);

Button.Group = MantineButton.Group;

export default Button;
