import { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';
import useWsContext from '../hooks/useWsContext';
import Button from './Button/Button';
import AppContext from '../contexts/AppContext';

const FormControls = () => {
  const { isGenerating } = useWsContext();

  const {
    formState: { enableSeedRandomisation },
    updateFormState,
  } = useContext(FormContext);

  const { promptError, executePrompt, executeInterrupt } =
    useContext(AppContext);

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
        {/* eslint-disable-next-line react/no-unknown-property */}
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
