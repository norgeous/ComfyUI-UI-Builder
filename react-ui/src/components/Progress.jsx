const Progress = ({ ...props }) => (
  <progress
    style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 3,
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
