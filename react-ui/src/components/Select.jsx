// import { Autocomplete, Loader } from '@mantine/core';

const Select = ({ options, loading, ...props }) => (
  <>
    {/* <Autocomplete
      {...props}
      data={options}
      rightSection={loading ? <Loader size="1rem" /> : null}
    /> */}
    <select className="uk-select" id="style-input" aria-label="Select">
      {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
    </select>
  </>
);

export default Select;
