import Button from './Button';

const FormControls = ({
  executePrompt,
  executeInterrupt,
  promptLoading,
  isGenerating,
  interruptLoading,
}) => (
  <>
    <Button
      // fullWidth
      onClick={executePrompt}
      // loading={promptLoading || isGenerating}
    >
      <span uk-icon="icon: bolt"></span>{/* eslint-disable-line react/no-unknown-property */}
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

export default FormControls;
