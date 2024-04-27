import { useRef } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from '../InputSelect/InputSelect';

const Input = styled.input`
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
  background: grey;
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
  name,
  value,
  onChange,
  options,
  onFileUpload,
  ...props
}) => {
  const fileInputRef = useRef();

  const handleSelectChange = data => {
    onChange(data.value);
  };

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
        name={name}
        options={options}
        onChange={handleSelectChange}
      />
      <Button onClick={() => fileInputRef.current.click()}>
        Choose a new file to upload...
      </Button>
      {value && <Img alt="" src={value} />}
      <Input
        ref={fileInputRef}
        type="file"
        accept={allowedFileTypes.join(',')}
        onChange={handleFileChange}
      />
    </>
  );
};

export default ImageUpload;
