import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputRefContext from '@/contexts/InputRefContext';
import ErrorText from '@/components/ErrorText/ErrorText';
import InputWrapper from '@/components/InputWrapper/InputWrapper';
import Select from '@/components/InputSelect/InputSelect';

const Input = styled.input.attrs({ type: 'file' })`
  display: none;
`;

const Img = styled.img`
  width: 200px;
  max-width: 100%;
  margin: 0 auto;
  display: block;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: var(--radius);
  background: var(--input-bg);
  color: var(--input-fg);
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

const InputFile = ({
  id = undefined,
  defaultValue = undefined,
  value = undefined,
  options = [],
  onChange = () => {},
  onFileUpload = () => {},
  error = undefined,
  ...props
}) => {
  const ref = useContext(InputRefContext);

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
      <InputWrapper>
        <Button onClick={() => ref.current.click()}>
          Choose a new file to upload...
        </Button>
        {value && <Img alt="" src={value} />}
        <Input
          ref={ref}
          accept={allowedFileTypes.join(',')}
          onChange={handleFileChange}
        />
        {error && <ErrorText>{error}</ErrorText>}
      </InputWrapper>
    </>
  );
};

InputFile.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFileUpload: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default InputFile;
