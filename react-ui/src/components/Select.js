import { Autocomplete, Loader } from '@mantine/core';

const Select = ({ options, loading, ...props }) => (
  <Autocomplete
    {...props}
    data={options}
    rightSection={loading ? <Loader size="1rem" /> : null}
  />
);

export default Select;
