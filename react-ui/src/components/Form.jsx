import useAppContext from '../hooks/useAppContext';
import FormControls from './FormControls';

const Form = () => {
  const {
    isGenerating,

    executePrompt,
    promptLoading,
    promptError,

    executeInterrupt,
    interruptLoading,
  } = useAppContext();

  return (
    <div>
      {promptError}
      <FormControls
        executePrompt={executePrompt}
        executeInterrupt={executeInterrupt}
        promptLoading={promptLoading}
        isGenerating={isGenerating}
        interruptLoading={interruptLoading}
      />
    </div>

  );
};

export default Form;
