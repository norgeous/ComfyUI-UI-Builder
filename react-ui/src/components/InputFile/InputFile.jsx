import { useRef } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from '../InputSelect/InputSelect';
import ErrorText from '../ErrorText';

const Input = styled.input.attrs({ type: 'file' })`
  display: none;
`;

const Img = styled.img`
  width: 200px;
  max-width: 100%;
  margin: 0 auto 6px;
  display: block;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: var(--radius);
  background: var(--input-bg);
  color: var(--input-fg);
  margin-bottom: 6px;
  padding: 8px;
  cursor: pointer;
`;

const allowedFileTypes = [
  '.jpg',
  '.jpeg',
  '.jfif',
  '.pjpeg',
  '.pjp',
  '.png',
  '.webp',
];

const ImageUpload = ({
  id,
  defaultValue,
  value,
  options,
  onChange,
  onFileUpload,
  error,
  ...props
}) => {
  const fileInputRef = useRef();

  const handleSelectChange = newValue => onChange(newValue);

  const handleFileChange = event => {
    if (event.target.files) {
      const file = event.target.files[0];
      onFileUpload(file);

      const blobUri = URL.createObjectURL(file);
      onChange(blobUri);
    }
  };

  return (
    <>
      <Select
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        id={id}
        options={options}
        defaultValue={defaultValue}
        value={value}
        onChange={handleSelectChange}
      />
      <Button onClick={() => fileInputRef.current.click()}>
        Choose a new file to upload...
      </Button>
      {value && <Img alt="" src={value} />}
      <Input
        ref={fileInputRef}
        accept={allowedFileTypes.join(',')}
        onChange={handleFileChange}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default ImageUpload;
