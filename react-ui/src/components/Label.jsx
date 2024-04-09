import PropTypes from 'prop-types';

const Label = ({
  label,
  info,
  children,
}) => (
  <label className="uk-form-label">
    {label}
    {info && (
    <>
      {' '}
      { }
      <button uk-icon="icon: question; ratio: 0.6" type="button" />
      { }
      <div className="uk-card uk-card-small uk-card-body uk-card-default" uk-drop="pos: right-top; mode: click;">
        {info}
      </div>
    </>
    )}
    {children}
  </label>
);

Label.propTypes = {
  label: PropTypes.string,
  info: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
