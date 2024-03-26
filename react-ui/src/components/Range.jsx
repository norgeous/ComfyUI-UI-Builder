/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import Label from './Label';

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
        className="uk-range"
        type="range"
        min="0"
        max={options.length - 1}
        step="1"
        value={String(options.map(option => option[name]).indexOf(value))}
        onChange={handleChange}
        {...props}
      />
      <div className="uk-form-label uk-grid-small uk-text-muted uk-flex uk-flex-between" style={{ padding: pipLabels ? '0 4px' : 0 }}>
        {minLabel && (
          <div>
            <span uk-icon="icon: arrow-left"></span>
            {minLabel}
          </div>
        )}
        {pipLabels?.map(pipLabel => <div key={pipLabel}>{pipLabel}</div>)}
        {maxLabel && (
          <div>
            {maxLabel}
            <span uk-icon="icon: arrow-right"></span>
          </div>
        )}
      </div>
    </Label>
  );
};

export default Range;
