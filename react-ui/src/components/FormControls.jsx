/* eslint-disable react/prop-types */
import useAppContext from '../hooks/useAppContext';
import Button from './Button';

const FormControls = ({
  executePrompt,
  executeInterrupt,
  // promptLoading,
  isGenerating,
  // interruptLoading,
}) => {
  const {
    formState: { enableSeedRandomisation },
    updateFormState,
  } = useAppContext();

  const handleClick = () => {
    executePrompt();
    if (enableSeedRandomisation) {
      const newSeed = Math.floor(Math.random() * 10 ** 10);
      updateFormState({ seed: newSeed });
    }
  };

  return (
    <>
      <Button
        // fullWidth
        onClick={handleClick}
        // loading={promptLoading || isGenerating}
      >
        <span uk-icon="icon: bolt" />
        { }
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
    </>
  );
};

export default FormControls;
