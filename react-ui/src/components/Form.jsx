import { useAppContext } from '../contexts/AppContext';
import Select from './Select';
import FormControls from './FormControls';

const Form = () => {
  const {
    isGenerating,

    ckptOptionsLoading,
    ckptOptionsError,
    ckptOptions,
    handleSelectCkpt,

    executePrompt,
    promptLoading,
    promptError,

    executeInterrupt,
    interruptLoading,
  } = useAppContext();

  return (
    <div
      // gap="md"
      direction="column"
    >
      <Select
        label="Select Checkpoint"
        options={ckptOptions}
        loading={ckptOptionsLoading}
        error={ckptOptionsError || promptError}
        onChange={handleSelectCkpt}
      />

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
