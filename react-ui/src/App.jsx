import { useAppContext } from './contexts/AppContext';
import Form from './components/Form';
import FormBuilder from './components/FormBuilder';

import './App.css';

const App = () => {
  const {
    isGenerating,
    progress,
    output,
  } = useAppContext();

  return (
    <>
        <div>🧌 Comfy Dungeon</div>

        {/* <Form /> */}


        <FormBuilder />

          {isGenerating && <progress value={progress * 100} />}

            {output && (
              <img
                style={{ aspectRatio: 1, width: '100%', maxWidth: 1024 }}
                alt=""
                src={`http://127.0.0.1:8188/view?filename=${output.images[0].filename}&type=output&subfolder=${output.images[0].subfolder}&rand=123`}
              />
            )}
          </>
  );
};

export default App;
