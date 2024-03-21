import { useAppContext } from './contexts/AppContext';
import Form from './components/Form';
import FormBuilder from './components/FormBuilder';

import config from './dungeons/dungeon-character-portrait';

import './App.css';

const App = () => {
  const {
    formState,
    isGenerating,
    progress,
    output,
    // bodyData,
  } = useAppContext();

  return (
    <>
      <aside id="left-col" className="uk-light uk-visible@m">
        <h4 className="uk-text-center uk-margin-remove-vertical text-light">
          Comfy Dungeon
          {' '}
          <small><sup>v0.2.0</sup></small>
        </h4>

        <div className="left-content-box left-nav-wrap">
          <FormBuilder formConfig={config.formConfig}/>
          <Form />
        </div>

      </aside>

      {isGenerating && <progress value={progress * 100} />}

      {output && (
        <img
          style={{ aspectRatio: 1, width: '100%', maxWidth: 1024 }}
          alt=""
          src={`http://127.0.0.1:8188/view?filename=${output.images[0].filename}&type=output&subfolder=${output.images[0].subfolder}&rand=123`}
        />
      )}
      <pre style={{ marginLeft: 460 }}>{JSON.stringify({formState},null,2)}</pre>
      {/* <pre style={{ marginLeft: 460, whiteSpace: 'pre-wrap' }}>{JSON.stringify({bodyData},null,2)}</pre> */}
    </>
  );
};

export default App;
