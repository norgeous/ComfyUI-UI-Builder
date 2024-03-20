/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

const Range = ({
  name,
  options,
  // loading,
  label,
  info,
  minLabel,
  maxLabel,
  value,
  onChange,
  ...props
}) => {
  const handleChange = (event) => onChange(options[Number(event.target.value)]);

  return (
    <label className="uk-form-label">
      {label}
      {info && (
        <>
          {' '}
          <button uk-icon="icon: question" type="button"></button>
          <div className="uk-card uk-card-small uk-card-body uk-card-default" uk-drop="pos: right-top; mode: click;">
            {info}
          </div>
        </>
      )}
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
      {minLabel && maxLabel && (
        <div className="uk-form-label uk-grid-small uk-text-muted uk-flex uk-flex-between">
          <div>
            <span uk-icon="icon: arrow-left"></span>
            {minLabel}
          </div>
          <div>
            {maxLabel}
            <span uk-icon="icon: arrow-right"></span>
          </div>
        </div>
      )}
    </label>
  );
};

export default Range;
