import { useContext, useRef, useState } from 'react';
import { ObjectInfoContext } from '../../contexts/ObjectInfoContext';
import Select from './Select';
import useComfyUpload from '../../hooks/useComfyUpload';

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
  const { objectInfoExecuteFetch, objectInfo } = useContext(ObjectInfoContext);

  const options = [
    { label: '-- undefined --', [name]: '' },
    ...(objectInfo?.LoadImage.input.required.image[0]
      .filter(imageName => allowedFileTypes.find(ft => imageName.endsWith(ft)))
      .map(imageName => ({
        label: imageName,
        [name]: imageName,
      })) || []),
  ];

  const handleFileChange = event => {
    if (event.target.files) setFile(event.target.files[0]);
  };

  const { loading } = useComfyUpload({
    file,
    enabled: file,
    onComplete: adaptedData => {
      objectInfoExecuteFetch(); // refetch the objectInfo (which contains the available images list)
      props.onChange({ [name]: adaptedData.name }); // set the current image
    },
  });

  return (
    <div>
      <Select
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        name={name}
        options={options}
      />

      {props.value && (
        <img alt="" src={`/view?type=input&filename=${props.value}`} />
      )}

      <input
        ref={fileInputRef}
        style={{ display: 'none' }}
        type="file"
        accept={allowedFileTypes.join(',')}
        onChange={handleFileChange}
      />
      <button type="button" onClick={() => fileInputRef.current.click()}>
        choose file
        <br />
        to upload
      </button>
      {loading && 'UPLOADING'}
    </div>
  );
};

export default ImageUpload;
