import useWsContext from '../hooks/useWsContext';
import useFormContext from '../hooks/useFormContext';
import useAppContext from '../hooks/useAppContext';
import Button from './Button';

const FormControls = () => {
  const { isGenerating } = useWsContext();

  const {
    formState: { enableSeedRandomisation },
    updateFormState,
  } = useFormContext();

  const { promptError, executePrompt, executeInterrupt } = useAppContext();

  const handleClick = () => {
    executePrompt();
    if (enableSeedRandomisation) {
      const newSeed = Math.floor(Math.random() * 10 ** 10);
      updateFormState({ seed: newSeed });
    }
  };

  return (
    <div>
      {promptError}
      <Button
        // fullWidth
        onClick={handleClick}
        // loading={promptLoading || isGenerating}
      >
        <span uk-icon="icon: bolt" />
        {}
        Roll
      </Button>
      {isGenerating && (
        <Button
          // variant="outline"
          onClick={executeInterrupt}
          // loading={interruptLoading}
        >
          Interrupt
        </Button>
      )}
    </div>
  );
};

export default FormControls;
