const Progress = ({ ...props }) => (
  <progress
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    style={{
      display: 'block',
      width: '100%',
      borderRadius: 0,
      height: '7px',
      backgroundColor: '#0c3047',
      border: 0,
    }}
    max={1}
  />
);

export default Progress;
