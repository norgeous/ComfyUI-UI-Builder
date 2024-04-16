import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../Label';

const Sublabels = styled.div`
  padding: ${({ $isPips }) => ($isPips ? '0 8px' : 0)};
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 4px;
`;

const Sublabel = styled.div`
  cursor: pointer;
`;

const Pip = styled.div`
  width: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const Range = ({ name, label, info, options, value, onChange, ...props }) => {
  const isPips = options.every(({ label: pipLabel }) => pipLabel);
  const minLabel = options[0].label;
  const maxLabel = options[options.length - 1].label;

  const handleChange = event => {
    const { label: _, ...state } = options[Number(event.target.value)];
    onChange(state);
  };

  return (
    <Label label={label} info={info}>
      <input
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        className="uk-range"
        type="range"
        min="0"
        max={options.length - 1}
        step="1"
        value={String(options.map(option => option[name]).indexOf(value))}
        onChange={handleChange}
      />
      <Sublabels className="uk-text-muted" $isPips={isPips}>
        {!isPips && minLabel && (
          <Sublabel onClick={() => onChange(options[0])}>
            <span uk-icon="icon: arrow-left" />
            {minLabel}
          </Sublabel>
        )}
        {isPips &&
          options?.map(({ label: pipLabel }, index) => (
            <Pip key={pipLabel} onClick={() => onChange(options[index])}>
              {pipLabel}
            </Pip>
          ))}
        {!isPips && maxLabel && (
          <Sublabel onClick={() => onChange(options[options.length - 1])}>
            {maxLabel}
            <span uk-icon="icon: arrow-right" />
          </Sublabel>
        )}
      </Sublabels>
    </Label>
  );
};

Range.defaultProps = {
  name: undefined,
  label: undefined,
  info: undefined,
  options: [],
  value: undefined,
  onChange: () => {},
};

Range.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    }),
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default Range;
