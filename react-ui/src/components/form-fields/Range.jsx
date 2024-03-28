/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import styled from 'styled-components';
import Label from '../Label';

const Sublabel = styled.div`
  padding: ${({pipLabels}) => pipLabels ? '0 8px' : 0};
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
  minLabel,
  maxLabel,
  pipLabels,
  value,
  onChange,
  ...props
}) => {
  const handleChange = (event) => onChange(options[Number(event.target.value)]);

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
        pipLabels={pipLabels}
      >
        {minLabel && (
          <div>
            <span uk-icon="icon: arrow-left"></span>
            {minLabel}
          </div>
        )}
        {pipLabels?.map(pipLabel => <Pip key={pipLabel}>{pipLabel}</Pip>)}
        {maxLabel && (
          <div>
            {maxLabel}
            <span uk-icon="icon: arrow-right"></span>
          </div>
        )}
      </Sublabel>
    </Label>
  );
};

export default Range;
