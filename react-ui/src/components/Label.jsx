import PropTypes from 'prop-types';

const Label = ({
  label,
  info,
  children,
}) => {
  return (
    <label className="uk-form-label">
      {label}
      {info && (
        <>
          {' '}
          {/* eslint-disable-next-line react/no-unknown-property */}
          <button uk-icon="icon: question" type="button"></button>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <div className="uk-card uk-card-small uk-card-body uk-card-default" uk-drop="pos: right-top; mode: click;">
            {info}
          </div>
        </>
      )}
      {children}
    </label>
  );
};
Label.propTypes = {
  label: PropTypes.string,
  info: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
