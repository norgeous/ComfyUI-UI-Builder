// import { Button as MantineButton } from '@mantine/core';

{/* <button id="roll" class="uk-button uk-button-danger" type="button"><span id="main-spinner" uk-spinner="ratio: 0.7" style="display: none;"></span><span id="roll-icon" uk-icon="icon: bolt"></span>&nbsp;Roll</button><input id="main-seed" class="uk-input" type="text" placeholder="Seed" aria-label="Seed" value="0"><label>Random <input id="is-random" class="uk-checkbox" type="checkbox" checked></label></form> */}

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="uk-button uk-button-danger" type="button"
    // loaderProps={{ type: 'dots' }}
  >
    {children}
  </button>
);

// Button.Group = MantineButton.Group;

export default Button;
