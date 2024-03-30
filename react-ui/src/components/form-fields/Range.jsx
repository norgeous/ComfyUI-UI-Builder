/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import styled from 'styled-components';
import Label from '../Label';

const Sublabel = styled.div`
  padding: ${({isPips}) => isPips ? '0 8px' : 0};
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 4px;
`;

const Pip = styled.div`
  width: 0;
  display: flex;
  justify-content: center; 
  text-align: center;
`;

const Range = ({
  name,
  options,
  // loading,
  label,
  info,
  // minLabel,
  // maxLabel,
  // pipLabels,
  value,
  onChange,
  ...props
}) => {
  const handleChange = (event) => onChange(options[Number(event.target.value)]);


  const isPips = options.every(({label}) => label);

  const minLabel = options[0].label;
  const maxLabel = options[options.length - 1].label;

  return (
    <Label label={label} info={info}>
      <input
        {...props}
        className="uk-range"
        type="range"
        min="0"
        max={options.length - 1}
        step="1"
        value={String(options.map(option => option[name]).indexOf(value))}
        onChange={handleChange}
      />
      <Sublabel
        className="uk-text-muted"
        isPips={isPips}
      >
        {!isPips && minLabel && (
          <div onClick={() => onChange(options[0])}>
            <span uk-icon="icon: arrow-left"></span>
            {minLabel}
          </div>
        )}
        {isPips && options?.map(({ label }, index) => (
          <Pip
            key={label}
            onClick={() => onChange(options[index])}
          >
            {label}
          </Pip>
        ))}
        {!isPips && maxLabel && (
          <div onClick={() => onChange(options[options.length - 1])}>
            {maxLabel}
            <span uk-icon="icon: arrow-right"></span>
          </div>
        )}
      </Sublabel>
    </Label>
  );
};

export default Range;
