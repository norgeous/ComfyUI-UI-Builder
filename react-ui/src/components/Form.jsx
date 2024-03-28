import useAppContext from '../hooks/useAppContext';
import FormControls from './FormControls';

const Form = () => {
  const {
    isGenerating,

    // ckptOptionsLoading,
    // ckptOptionsError,
    // ckptOptions,
    // handleSelectCkpt,

    executePrompt,
    promptLoading,
    // promptError,

    executeInterrupt,
    interruptLoading,
  } = useAppContext();

  return (
    <div>
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
