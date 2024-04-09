const Progress = ({ ...props }) => (
  <progress
    style={{
      display: 'block',
      width: '100%',
      borderRadius: 0,
      height: '7px',
      backgroundColor: '#0c3047',
      border: 0,
    }}
    max={1}
    {...props}
  />
);

export default Progress;
