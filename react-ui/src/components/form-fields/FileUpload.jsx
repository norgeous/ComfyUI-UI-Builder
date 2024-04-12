import { useContext, useRef, useState } from 'react';
import { ObjectInfoContext } from '../../contexts/ObjectInfoContext';
import Select from './Select';

const allowedFileTypes = [
  '.jpg',
  '.jpeg',
  '.jfif',
  '.pjpeg',
  '.pjp',
  '.png',
  '.webp',
];

const ImageUpload = ({ name, ...props }) => {
  const fileInputRef = useRef();
  const [file, setFile] = useState(null);
  const { objectInfo } = useContext(ObjectInfoContext);
  const options =
    objectInfo?.LoadImage.input.required.image[0]
      .filter(imageName => allowedFileTypes.find(ft => imageName.endsWith(ft)))
      .map(imageName => ({
        label: imageName,
        [name]: imageName,
      })) || [];

  const handleFileChange = event => {
    if (event.target.files) setFile(event.target.files[0]);
  };

  return (
    <>
      <div>
        <Select
          {...props} // eslint-disable-line react/jsx-props-no-spreading
          name={name}
          options={options}
        />

        <img alt="" src={`/view?type=input&filename=${props.value}`} />

        <input
          ref={fileInputRef}
          style={{ display: 'none' }}
          type="file"
          accept={allowedFileTypes.join(',')}
          onChange={handleFileChange}
        />
        <button type="button" onClick={() => fileInputRef.current.click()}>
          choose file to upload
        </button>
      </div>

      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}
    </>
  );
};

export default ImageUpload;
